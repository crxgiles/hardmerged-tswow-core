import { SQL } from "wow/wotlk";

// Define scaling factors
const HEALTH_MULTIPLIER = 4.5;
const DAMAGE_MULTIPLIER = 2.5;

// Function to apply scaling to creatures
function scaleCreatures() {
    // Query all creatures from level 1 to 80 using raw numerical values
    const creatures = SQL.creature_template.queryAll({ 
        minlevel: 1, // Simple equality or range start
        maxlevel: 80 // Simple equality or range end
    });

    for (const creature of creatures) {
        // Scale health using HealthModifier
        creature.HealthModifier.set(creature.HealthModifier.get() * HEALTH_MULTIPLIER);

        // Scale damage using DamageModifier if available
        if ('DamageModifier' in creature) {
            creature.DamageModifier.set(creature.DamageModifier.get() * DAMAGE_MULTIPLIER);
        }

        // Optional: Adjust elite mobs slightly higher if desired
        if (creature.rank.get() === 1) { // Rank 1 = Elite
            creature.HealthModifier.set(creature.HealthModifier.get() * 1.2); // 20% extra health for elites
            if ('DamageModifier' in creature) {
                creature.DamageModifier.set(creature.DamageModifier.get() * 1.2); // 20% extra damage for elites
            }
        }
    }
}

// Register the scaling function
export default function registerScaling() {
    scaleCreatures();
}