import matplotlib.pyplot as plt
import pandas as pd

# Weapon data with impact scores for eco and non-eco rounds
# Impact scores are based on weapon tier and characteristics
data = {
    "Weapon": ["Operator", "Phantom", "Vandal", "Sheriff", "Classic", "Judge", "Guardian", "Odin", "Spectre", "Ares", "Bulldog", "Marshall", "Ghost", "Stinger", "Bucky", "Knife", "Shorty", "Frenzy"],
    "Eco Round Impact": [2, 5, 5, 7, 8, 6, 4, 3, 6, 5, 4, 7, 6, 7, 6, 1, 3, 6],  # Higher for low-cost, high-efficiency weapons
    "Non-Eco Round Impact": [9, 8, 8, 6, 3, 6, 5, 6, 5, 4, 5, 4, 4, 5, 3, 1, 2, 4]  # Higher for high-tier, versatile weapons
}

df = pd.DataFrame(data)

# Plotting
fig, axes = plt.subplots(nrows=1, ncols=2, figsize=(15, 6))
df.plot(kind='bar', x='Weapon', y='Eco Round Impact', ax=axes[0], color='green', legend=False)
df.plot(kind='bar', x='Weapon', y='Non-Eco Round Impact', ax=axes[1], color='blue', legend=False)

# Setting titles and labels
axes[0].set_title('Weapon Impact in Eco Rounds')
axes[0].set_ylabel('Impact Score')
axes[0].tick_params(axis='x', rotation=90)

axes[1].set_title('Weapon Impact in Non-Eco Rounds')
axes[1].set_ylabel('Impact Score')
axes[1].tick_params(axis='x', rotation=90)

plt.tight_layout()
plt.show()
