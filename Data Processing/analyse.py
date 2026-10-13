import pandas as pd
import matplotlib.pyplot as plt
import numpy as np

# Load data
df = pd.read_excel("results_adjusted.xlsx")  

# -----------------------------
# Prepare matched vs mismatched
# -----------------------------

matched_pos, matched_neg = [], []
mismatched_pos, mismatched_neg = [], []

for _, row in df.iterrows():
    
    # UI1
    if row['UI1'] == row['Fit UI']:
        matched_pos.append(row['PANAS+1'])
        matched_neg.append(row['PANAS-1'])
    else:
        mismatched_pos.append(row['PANAS+1'])
        mismatched_neg.append(row['PANAS-1'])

    # UI2
    if row['UI2'] == row['Fit UI']:
        matched_pos.append(row['PANAS+2'])
        matched_neg.append(row['PANAS-2'])
    else:
        mismatched_pos.append(row['PANAS+2'])
        mismatched_neg.append(row['PANAS-2'])

# Means
mean_matched_pos = np.mean(matched_pos)
mean_mismatched_pos = np.mean(mismatched_pos)

mean_matched_neg = np.mean(matched_neg)
mean_mismatched_neg = np.mean(mismatched_neg)

# -----------------------------
# Plot styling
# -----------------------------

plt.style.use('default')
fig, ax = plt.subplots(figsize=(8, 5))

labels = ['Matched', 'Mismatched']
x = np.arange(len(labels))
width = 0.35

# Instagram gradient-inspired colors
insta_pink = "#E1306C"
insta_purple = "#833AB4"
insta_orange = "#F77737"

# Bars
bars1 = ax.bar(x - width/2, 
               [mean_matched_pos, mean_mismatched_pos], 
               width, 
               label='Positive Affect (PANAS+)', 
               color=insta_purple)

bars2 = ax.bar(x + width/2, 
               [mean_matched_neg, mean_mismatched_neg], 
               width, 
               label='Negative Affect (PANAS-)', 
               color=insta_orange)

# -----------------------------
# Aesthetic improvements
# -----------------------------

# Title & labels
ax.set_title("Effect of Personality–UI Match on User Affect", fontsize=14, weight='bold')
ax.set_ylabel("PANAS Score", fontsize=11)

ax.set_xticks(x)
ax.set_xticklabels(labels, fontsize=11)

# Grid (soft, modern)
ax.yaxis.grid(True, linestyle='--', alpha=0.3)
ax.set_axisbelow(True)

# Remove top/right borders
ax.spines['top'].set_visible(False)
ax.spines['right'].set_visible(False)

# Value labels
for bars in [bars1, bars2]:
    for bar in bars:
        height = bar.get_height()
        ax.text(bar.get_x() + bar.get_width()/2, 
                height + 0.5, 
                f'{height:.1f}', 
                ha='center', 
                va='bottom',
                fontsize=9)

# Legend
ax.legend(frameon=False)

plt.tight_layout()
plt.show()




import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

# -----------------------------
# Load data
# -----------------------------
df = pd.read_excel("results_adjusted.xlsx")

# -----------------------------
# Create preference scores
# -----------------------------
df["Pref1"] = df["PANAS+1"] - df["PANAS-1"]
df["Pref2"] = df["PANAS+2"] - df["PANAS-2"]

# -----------------------------
# Convert data to long format
# -----------------------------
data = []

for _, row in df.iterrows():
    data.append([row["EXTraversion"], row["CONscientiousness"], row["Openness"], row["UI1"], row["Pref1"]])
    data.append([row["EXTraversion"], row["CONscientiousness"], row["Openness"], row["UI2"], row["Pref2"]])

long_df = pd.DataFrame(data, columns=["EXT", "CON", "OPN", "UI", "Preference"])

# -----------------------------
# Define personality groups
# -----------------------------
groups = {
    "High Extraversion": long_df[long_df["EXT"].isin(["High", "MedH"])],
    "High Conscientiousness": long_df[long_df["CON"].isin(["High", "MedH"])],
    "High Openness": long_df[long_df["OPN"].isin(["High", "MedH"])]
}

# -----------------------------
# Compute averages per UI
# -----------------------------
ui_types = ["A", "B", "C"]
results = {}

for group_name, group_data in groups.items():
    results[group_name] = []
    for ui in ui_types:
        mean_val = group_data[group_data["UI"] == ui]["Preference"].mean()
        results[group_name].append(mean_val)

# -----------------------------
# Plot
# -----------------------------
x = np.arange(len(ui_types))
width = 0.25

fig, ax = plt.subplots(figsize=(8, 5))

colors = ["#E1306C", "#833AB4", "#F77737"]  # Instagram gradient tones

for i, (group_name, values) in enumerate(results.items()):
    ax.bar(x + i*width, values, width, label=group_name, color=colors[i])

# Formatting
ax.set_xticks(x + width)
ax.set_xticklabels(["UI A", "UI B", "UI C"])
ax.set_ylabel("Preference Score (PANAS+ − PANAS−)")
ax.set_title("Personality vs UI Preference")

ax.legend(frameon=False)
ax.yaxis.grid(True, linestyle="--", alpha=0.3)
ax.set_axisbelow(True)

# Remove top/right borders
ax.spines['top'].set_visible(False)
ax.spines['right'].set_visible(False)

# Value labels
for container in ax.containers:
    ax.bar_label(container, fmt="%.1f")

plt.tight_layout()
plt.show()



import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

# -----------------------------
# Load data
# -----------------------------
df = pd.read_excel("results_adjusted.xlsx")

# -----------------------------
# UEQ mapping
# -----------------------------
ueq_mapping = {
    "Attractiveness": [1, 12, 14, 23],
    "Perspicuity": [2, 4, 20],
    "Efficiency": [9, 13, 19],
    "Dependability": [8, 15, 17],
    "Stimulation": [6, 7, 10],
    "Novelty": [11, 16, 26]
}

# -----------------------------
# Helper function
# -----------------------------
def compute_ueq_from_row(row, prefix):
    scores = {}
    for dim, items in ueq_mapping.items():
        values = [row[f"{prefix}UEQ{i}"] for i in items]
        scores[dim] = np.mean(values)
    return scores

# -----------------------------
# Collect scores for UI A and UI C
# -----------------------------
uiA_scores = {dim: [] for dim in ueq_mapping}
uiC_scores = {dim: [] for dim in ueq_mapping}

for _, row in df.iterrows():
    
    # --- UI1 ---
    if row["UI1"] == "A":
        scores = compute_ueq_from_row(row, "1")
        for dim in ueq_mapping:
            uiA_scores[dim].append(scores[dim])
    
    elif row["UI1"] == "C":
        scores = compute_ueq_from_row(row, "1")
        for dim in ueq_mapping:
            uiC_scores[dim].append(scores[dim])
    
    # --- UI2 ---
    if row["UI2"] == "A":
        scores = compute_ueq_from_row(row, "2")
        for dim in ueq_mapping:
            uiA_scores[dim].append(scores[dim])
    
    elif row["UI2"] == "C":
        scores = compute_ueq_from_row(row, "2")
        for dim in ueq_mapping:
            uiC_scores[dim].append(scores[dim])

# -----------------------------
# Compute means
# -----------------------------
uiA_mean = [np.mean(uiA_scores[d]) for d in ueq_mapping]
uiC_mean = [np.mean(uiC_scores[d]) for d in ueq_mapping]

# Close loops for radar
uiA_mean += uiA_mean[:1]
uiC_mean += uiC_mean[:1]

# -----------------------------
# Radar setup
# -----------------------------
labels = list(ueq_mapping.keys())
angles = np.linspace(0, 2*np.pi, len(labels), endpoint=False).tolist()
angles += angles[:1]

# -----------------------------
# Plot
# -----------------------------
fig, ax = plt.subplots(figsize=(7, 7), subplot_kw=dict(polar=True))

colors = {
    "UI A": "#E1306C",  # pink
    "UI C": "#F77737"   # orange
}

# Plot UI A
ax.plot(angles, uiA_mean, linewidth=2, color=colors["UI C"], label="UI C")
ax.fill(angles, uiA_mean, alpha=0.15, color=colors["UI C"])

# Plot UI C
ax.plot(angles, uiC_mean, linewidth=2, color=colors["UI A"], label="UI A")
ax.fill(angles, uiC_mean, alpha=0.15, color=colors["UI A"])

# -----------------------------
# Styling
# -----------------------------
ax.set_xticks(angles[:-1])
ax.set_xticklabels(labels, fontsize=10)

ax.set_yticks([1,2,3,4,5,6,7])
ax.set_ylim(1,7)

ax.set_title("UEQ Comparison: UI A vs UI C", fontsize=14, weight="bold")

ax.legend(loc="upper right", bbox_to_anchor=(1.3, 1.1))

# Clean look
ax.grid(alpha=0.3)

plt.tight_layout()
plt.show()


