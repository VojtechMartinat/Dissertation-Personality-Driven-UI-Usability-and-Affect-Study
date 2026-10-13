# Personality-Driven UI Usability and Affect Study

This repository contains my Dissertation for the Mathematics and Computer Science programme at the University of Bristol. It includes the final dissertation and supporting files, investigating the relationship between user personality traits and user interface (UI) affinity in social media design. This project received a First-Class / 70% (Highest Academic Distinction tier)

---

## Description
This project examines the cognitive compatibility between a system's structure and a user's mindset within the realm of social media. By exposing participants to three distinct mock interfaces representing different design paradigms, the study evaluates how personality-congruent design influences emotional engagement, subjective satisfaction, and behavioral patterns.

## Aims

* **Explore Existing Research:** Investigate current literature and perspectives on user interface (UI) design in social media systems and general software, focusing on how interfaces influence user behavior, perception, and engagement.
* **Assess User Usability & Perception:** Evaluate how users perceive and measure the usability of varying social media interface styles through hands-on, interactive tasks.
* **Investigate Personality–Interface Relationships:** Examine the relationship between individual user traits (such as Big Five personality dimensions) and user engagement across specific interface designs.
* **Critically Evaluate & Discuss Implications:** Analyze the significance and limitations of the collected data and methodology, discussing the broader implications for future social media system design and human-centered interface research.

## Overview of Method
The study utilizes a multi-step data collection and analysis framework:
1. **Data Ingestion & Cleaning:** Raw survey responses from Qualtrics and backend interaction logs are processed and normalized.
2. **Psychometric Scoring:** Standardized scales are calculated, including the Ten-Item Personality Inventory (TIPI) for Big Five traits, PANAS for emotional affect, and UEQ dimensions (Attractiveness, Perspicuity, Efficiency, Dependability, Stimulation, and Novelty).
3. **Alignment & Clustering:** Participants are classified based on dominant personality traits and alignment metrics relative to assigned interface variants.
4. **Statistical & Visual Analysis:** The codebase generates automated regression models, radar charts, heatmaps, boxplots, and ANOVA tables to evaluate hypotheses regarding personality-UI fit.



## Repository Structure
```text
├── Data Processing
│   ├── analyse.py                      # Sample processing script that reads user survey data to analyze and visualize the relationships between user personality traits, personality-UI matching, PANAS emotional affect scores and User Experience Questionnaire (UEQ) metrics across different UI designs.
│   └── collect.py                      # Sample script that processes survey and interaction data from Qualtrics and analytical logs to compute psychometric scales (like Big Five personality traits, PANAS affect, and UEQ metrics) and generate eleven distinct visual analyses and an ANOVA statistical test examining user behavior, affect, and UI preferences.
├── Interfaces                        
│   └── src/                            # Code for each distinct interface. When hosted on Vercel, a PostHog logger wrapper is set up such that all interactions are logged and timestamped for interaction analysis
├── Supporting Documents                # Various documents, including the questionnaire used and poster for promoting the project 
├── DISSERTATION FINAL.pdf              # Finalised dissertation document
│   `├── 01_Introduction/`
│   `├── 02_Background/`
│   `│   ├── 2.1_Social_Media`
│   `│   └── 2.2_Digital_Environment_Design`
│   `├── 03_Methodology/`
│   `│   ├── 3.1_General_Approach`
│   `│   ├── 3.2_Interface_A`
│   `│   ├── 3.3_Interface_B`
│   `│   ├── 3.4_Interface_C`
│   `│   ├── 3.5_Questionnaire`
│   `│   ├── 3.6_Participants`
│   `│   └── 3.7_Apparatus`
│   `├── 04_Result_Analysis/`
│   `│   ├── 4.1_Analytical_Tools`
│   `│   ├── 4.2_Broad_Behavioural_Relationships`
│   `│   ├── 4.3_Person_Environment_Fit`
│   `│   ├── 4.4_Design_Validity_and_Real_World_Parallels`
│   `│   └── 4.5_Limitations_and_Caveat`
│   `├── 05_Critical_Evaluation/`
│   `├── 06_Conclusion/`
│   `│   └── 6.1_Further_Research`
│   `└── Appendix/`
│       `└── A_Appendix_A_AI_Prompts_Tools`
└── Readme.md                           # Project documentation
```

## Dedication and Acknowledgements
To my supervisor, Professor Matthew Edwards, for his invaluable supervision and support.