import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
import json
import ast

# ==========================================
# 1. LOAD AND PREPARE THE DATA
# ==========================================
qualtrics_df = pd.read_csv('Qualtrics(2).csv')
analysis_df = pd.read_csv('analysis_results(2).csv')

# Clean Qualtrics (headers are top 2 rows)
qualtrics_clean = qualtrics_df.iloc[2:].reset_index(drop=True)

# Define column groups
panas1_cols = [f'Q36_{i}' for i in range(1, 21)]
ueq1_cols = [f'Q37_{i}' for i in range(1, 27)]
panas2_cols = [f'Q38_{i}' for i in range(1, 21)]
ueq2_cols = [f'Q32_{i}' for i in range(1, 27)]
tipi_cols = [f'Q33_{i}' for i in range(1, 11)]

# Convert to numeric
numeric_cols = panas1_cols + panas2_cols + ueq1_cols + ueq2_cols + tipi_cols + ['Q28', 'Q29', 'Q30.1']
for col in numeric_cols:
    qualtrics_clean[col] = pd.to_numeric(qualtrics_clean[col], errors='coerce')

# ==========================================
# 2. CALCULATE PSYCHOMETRIC SCALES
# ==========================================
# Big Five Personality Traits (TIPI)
qualtrics_clean['Extraversion'] = (qualtrics_clean['Q33_1'] + (8 - qualtrics_clean['Q33_6'])) / 2
qualtrics_clean['Agreeableness'] = ((8 - qualtrics_clean['Q33_2']) + qualtrics_clean['Q33_7']) / 2
qualtrics_clean['Conscientiousness'] = (qualtrics_clean['Q33_3'] + (8 - qualtrics_clean['Q33_8'])) / 2
qualtrics_clean['Emotional_Stability'] = ((8 - qualtrics_clean['Q33_4']) + qualtrics_clean['Q33_9']) / 2
qualtrics_clean['Neuroticism'] = 8 - qualtrics_clean['Emotional_Stability']
qualtrics_clean['Openness'] = (qualtrics_clean['Q33_5'] + (8 - qualtrics_clean['Q33_10'])) / 2

# Affect (PANAS)
pos_idx = [1, 3, 5, 9, 10, 12, 14, 16, 17, 19]
neg_idx = [2, 4, 6, 7, 8, 11, 13, 15, 18, 20]
def calc_pa_na(df, prefix):
    df[f'{prefix}_PA'] = df[[f'{prefix}_{i}' for i in pos_idx]].mean(axis=1)
    df[f'{prefix}_NA'] = df[[f'{prefix}_{i}' for i in neg_idx]].mean(axis=1)

calc_pa_na(qualtrics_clean, 'Q36')
calc_pa_na(qualtrics_clean, 'Q38')

# UEQ Standard Scales
ueq_map = {
    'Attractiveness': [1, 12, 14, 16, 24, 25], 'Perspicuity': [2, 13, 21, 22],
    'Efficiency': [9, 20, 23, 26], 'Dependability': [8, 11, 17, 19],
    'Stimulation': [5, 6, 7, 18], 'Novelty': [3, 4, 10, 15]
}
def calc_ueq(df, prefix, suffix):
    for trait, idxs in ueq_map.items():
        df[f'{trait}_{suffix}'] = df[[f'{prefix}_{i}' for i in idxs]].mean(axis=1)
    df[f'UEQ_Mean_{suffix}'] = df[[f'{prefix}_{i}' for i in range(1, 27)]].mean(axis=1)

calc_ueq(qualtrics_clean, 'Q37', '1')
calc_ueq(qualtrics_clean, 'Q32', '2')

# ==========================================
# 3. DATA MERGE (Matching Q30 ID to user_id)
# ==========================================
merged_df = pd.merge(analysis_df, qualtrics_clean, left_on='user_id', right_on='Q30', how='inner')

# Prepare Long Format Data
ueq_traits = list(ueq_map.keys())
def get_seg(p, s):
    cols = ['user_id', f'{p}_assigned_variant', f'Q{36 if s=="1" else 38}_PA', f'Q{36 if s=="1" else 38}_NA', 
            'Extraversion', 'Agreeableness', 'Conscientiousness', 'Neuroticism', 'Openness', f'UEQ_Mean_{s}']
    cols += [f'{t}_{s}' for t in ueq_traits]
    cols += [f'{p}_front_page_time_sec', f'{p}_chats_time_spent_typing_sec', f'{p}_chats_avg_msg_length', f'{p}_avg_view_time_per_post_sec', f'{p}_post_insights_json']
    seg = merged_df[cols].copy()
    seg.columns = ['user_id', 'UI', 'PA', 'NA', 'Extraversion', 'Agreeableness', 'Conscientiousness', 'Neuroticism', 'Openness', 'UEQ_Mean'] + \
                  ueq_traits + ['front_page_time', 'chat_typing', 'msg_length', 'avg_view_time', 'post_json']
    return seg

# Safe json parser for missing values
def safe_count_posts(x):
    if pd.isna(x) or str(x).strip() in ['', '{}']: return 0
    try: return len(json.loads(str(x)))
    except:
        try: return len(ast.literal_eval(str(x)))
        except: return 0

long_df = pd.concat([get_seg('int1', '1'), get_seg('int2', '2')]).dropna(subset=['UI'])
long_df['posts_viewed'] = long_df['post_json'].apply(safe_count_posts)

# ==========================================
# 4. ALIGNMENT & DOMINANT TRAIT LOGIC
# ==========================================
meds = long_df[['Extraversion', 'Agreeableness', 'Conscientiousness', 'Neuroticism', 'Openness']].median()

# Target Persona Alignment Logic
def check_aln(r):
    if r['UI'] == 'C': return r['Extraversion'] >= meds['Extraversion'] and r['Neuroticism'] < meds['Neuroticism']
    if r['UI'] == 'B': return r['Conscientiousness'] >= meds['Conscientiousness'] and r['Agreeableness'] >= meds['Agreeableness']
    if r['UI'] == 'A': return r['Openness'] >= meds['Openness'] and r['Neuroticism'] >= meds['Neuroticism']
    return False
long_df['Is_Aligned'] = long_df.apply(check_aln, axis=1)

# Preferred UI per user
user_pref = long_df.sort_values(['user_id', 'PA', 'UEQ_Mean'], ascending=False).drop_duplicates('user_id')[['user_id', 'UI']]
user_pref.columns = ['user_id', 'Preferred_UI']

# Dominant Trait Logic (For 3x5 Matrices)
trait_cols = ['Extraversion', 'Agreeableness', 'Conscientiousness', 'Neuroticism', 'Openness']
long_df['Dominant_Trait'] = long_df[trait_cols].idxmax(axis=1)

# ==========================================
# 5. GENERATE ALL 11 PLOTS
# ==========================================
sns.set_theme(style="whitegrid")

# Plot 1: Faceted Regression
sns.lmplot(data=long_df, x='Extraversion', y='front_page_time', col='UI', hue='UI', height=4, scatter_kws={'alpha':0.6})
plt.savefig('Analysis_1_Regression.png', bbox_inches='tight'); plt.close()

# Plot 2: Ideal User Radar
N = len(trait_cols); angs = [n/float(N)*2*np.pi for n in range(N)]; angs += angs[:1]
fig, ax = plt.subplots(figsize=(7, 7), subplot_kw=dict(polar=True))
for ui in sorted(long_df['UI'].unique()):
    top = long_df[long_df['UI']==ui]; top = top[top['PA'] >= top['PA'].quantile(0.75)]
    vals = top[trait_cols].mean().tolist(); vals += vals[:1]
    ax.plot(angs, vals, label=f'UI {ui}'); ax.fill(angs, vals, alpha=0.1)
plt.xticks(angs[:-1], trait_cols); plt.legend(loc='lower center', bbox_to_anchor=(0.5, -0.15))
plt.savefig('Analysis_2_Ideal_Radar.png', bbox_inches='tight'); plt.close()

# Plot 3: PA by Alignment
plt.figure(figsize=(8, 6)); sns.barplot(data=long_df, x='UI', y='PA', hue='Is_Aligned', palette='Set2')
plt.savefig('Analysis_3_PA_Alignment.png', bbox_inches='tight'); plt.close()

# Plot 4: Behavioral Correlation Heatmap
plt.figure(figsize=(14, 8))
b_vars = ['front_page_time', 'chat_typing', 'msg_length', 'avg_view_time', 'posts_viewed', 'PA', 'UEQ_Mean']
h_corr = long_df[trait_cols + b_vars].corr().loc[trait_cols, b_vars]
sns.heatmap(h_corr, annot=True, cmap='coolwarm', fmt=".2f")
plt.title("Personality Traits vs. Performance & Affect")
plt.savefig('Analysis_4_Behavior_Heatmap.png', bbox_inches='tight'); plt.close()

# Plot 5: UEQ Radar (Aligned Only)
fig, ax = plt.subplots(figsize=(10, 8), subplot_kw=dict(polar=True))
M = len(ueq_traits); angs_u = [m/float(M)*2*np.pi for m in range(M)]; angs_u += angs_u[:1]
for ui in sorted(long_df['UI'].unique()):
    dat = long_df[(long_df['UI']==ui) & (long_df['Is_Aligned'])]
    if not dat.empty:
        vals = dat[ueq_traits].mean().tolist(); vals += vals[:1]
        ax.plot(angs_u, vals, linewidth=3, label=f'UI {ui} Aligned')
plt.xticks(angs_u[:-1], ueq_traits); plt.legend(loc='upper right', bbox_to_anchor=(1.25, 1.1), frameon=True)
plt.savefig('Analysis_5_UEQ_Radar.png', bbox_inches='tight'); plt.close()

# Plot 6: Hypothesis Check (Boxplot)
plt.figure(figsize=(10, 6)); sns.boxplot(data=long_df, x='UI', y='PA', hue='Is_Aligned')
plt.savefig('Analysis_6_Hypothesis_Boxplot.png', bbox_inches='tight'); plt.close()

# Plot 7: 3x5 PA Matrix (Dominant Trait vs UI)
plt.figure(figsize=(10, 6))
pa_matrix = long_df.pivot_table(index='Dominant_Trait', columns='UI', values='PA', aggfunc='mean')
for t in trait_cols:
    if t not in pa_matrix.index: pa_matrix.loc[t] = np.nan
pa_matrix = pa_matrix.loc[trait_cols]
sns.heatmap(pa_matrix, annot=True, cmap='YlGnBu')
plt.title("Mean Positive Affect by Dominant Personality Trait and UI")
plt.ylabel("Dominant Trait (Highest Score)")
plt.xlabel("Interface Variant")
plt.savefig('Analysis_7_3x5_PA_Matrix.png', bbox_inches='tight'); plt.close()

# Plot 8: Social Media vs. Preferred UI
sm_map = {1:'Instagram', 2:'Facebook', 3:'TikTok', 4:'X', 5:'Snapchat', 6:'YouTube', 7:'Reddit', 8:'LinkedIn', 9:'Pinterest', 10:'Discord', 11:'None', 12:'Other'}
sm_data = merged_df[['user_id', 'Q28', 'Q29', 'Q30.1']].merge(user_pref, on='user_id')
sm_long = pd.melt(sm_data, id_vars=['user_id', 'Preferred_UI'], value_vars=['Q28', 'Q29', 'Q30.1'], value_name='SM_Code').dropna()
sm_long['Social_Media'] = sm_long['SM_Code'].map(sm_map)
plt.figure(figsize=(12, 6)); sns.countplot(data=sm_long, x='Social_Media', hue='Preferred_UI', palette='muted')
plt.title("Relationship: Daily Social Media Use vs. Mock System Preference"); plt.xticks(rotation=45)
plt.savefig('Analysis_8_Social_Media_Preference.png', bbox_inches='tight'); plt.close()

# Plot 9: 3x5 Count Matrix (Sample Distribution)
plt.figure(figsize=(10, 6))
count_matrix = pd.crosstab(long_df['Dominant_Trait'], long_df['UI'])
for t in trait_cols:
    if t not in count_matrix.index: count_matrix.loc[t] = 0
count_matrix = count_matrix.loc[trait_cols]
sns.heatmap(count_matrix, annot=True, cmap='Purples', fmt='g')
plt.title("Sample Size: Count of Users by Dominant Personality Trait and UI")
plt.ylabel("Dominant Trait (Highest Score)")
plt.xlabel("Interface Variant")
plt.savefig('Analysis_9_3x5_Count_Matrix.png', bbox_inches='tight')
plt.close()

# Plot 10: Personality Profile of High PA Users per Interface
# Find the top 25% of users (high PA)
high_pa_df = long_df[long_df['PA'] >= long_df['PA'].quantile(0.75)]
trait_means = high_pa_df.groupby('UI')[trait_cols].mean().reset_index()
# Melt the dataframe so seaborn can plot it as a grouped bar chart
trait_means_melted = trait_means.melt(id_vars='UI', value_vars=trait_cols, var_name='Trait', value_name='Mean Score')

plt.figure(figsize=(12, 6))
sns.barplot(data=trait_means_melted, x='UI', y='Mean Score', hue='Trait', palette='Set2')
plt.title("Personality Profile: Average Traits of Highly Satisfied Users (Top 25% PA) by Interface")
plt.legend(bbox_to_anchor=(1.05, 1), loc='upper left')
plt.tight_layout()
plt.savefig('Analysis_10_High_PA_Traits.png', bbox_inches='tight')
plt.close()

# Plot 11: Extraversion vs Average View Time per Post (UI A vs UI C)
# Filter data for just Interfaces A and C
ac_df = long_df[long_df['UI'].isin(['A', 'C'])].copy()

# Plot using lmplot to show the scatter and the linear trend line
g = sns.lmplot(data=ac_df, x='Extraversion', y='avg_view_time', hue='UI', height=6, aspect=1.3, palette='coolwarm', scatter_kws={'alpha':0.7, 's': 50})
plt.title("Correlation: Extraversion vs. Average View Time per Post (Interface A vs. C)")
plt.ylabel("Avg View Time per Post (Seconds)")
plt.xlabel("Extraversion Score")
plt.tight_layout()
plt.savefig('Analysis_11_Extraversion_vs_ViewTime_AC.png', bbox_inches='tight')
plt.close()

print("Script execution complete. 11 analysis visualizations generated.")

import statsmodels.api as sm
from statsmodels.formula.api import ols

# ==========================================
# 4. ALIGNMENT & PERSONALITY CLUSTER LOGIC
# ==========================================
# Calculate medians for the thresholding
meds = long_df[['Extraversion', 'Agreeableness', 'Conscientiousness', 'Neuroticism']].median()

# Define the 3 specific clusters based on prompt
def assign_cluster(r):
    # Cluster 1: High Extraversion, Low Neuroticism
    if r['Extraversion'] >= meds['Extraversion'] and r['Neuroticism'] < meds['Neuroticism']:
        return 'Cluster_1' 
    
    # Cluster 2: High Conscientiousness, High Agreeableness
    elif r['Conscientiousness'] >= meds['Conscientiousness'] and r['Agreeableness'] >= meds['Agreeableness']:
        return 'Cluster_2' 
    
    # Cluster 3: High Neuroticism, Low Extraversion
    elif r['Neuroticism'] >= meds['Neuroticism'] and r['Extraversion'] < meds['Extraversion']:
        return 'Cluster_3' 
    
    else:
        return 'Unclassified'

# Apply the function to create the new column
long_df['Personality_Cluster'] = long_df.apply(assign_cluster, axis=1)

# Drop users who do not fit into the 3 defined clusters
long_df_filtered = long_df[long_df['Personality_Cluster'] != 'Unclassified'].copy()

# ==========================================
# 6. TWO-WAY ANOVA CALCULATION (CLUSTERS)
# ==========================================
print("\n" + "="*50)
print("TWO-WAY ANOVA RESULTS: INTERFACE vs. PERSONALITY CLUSTER")
print("="*50)

# Show how many users fell into each cluster
print("\nParticipant Distribution Across UIs and Clusters:")
print(pd.crosstab(long_df_filtered['UI'], long_df_filtered['Personality_Cluster']))
print("-" * 50)

# Build the OLS model using the 3 clusters instead of Dominant Trait
formula = 'PA ~ C(UI) + C(Personality_Cluster) + C(UI):C(Personality_Cluster)'

try:
    model = ols(formula, data=long_df_filtered).fit()
    anova_table = sm.stats.anova_lm(model, typ=2)
    pd.options.display.float_format = '{:,.4f}'.format
    print(anova_table)
except Exception as e:
    print(f"Error calculating ANOVA: {e}")