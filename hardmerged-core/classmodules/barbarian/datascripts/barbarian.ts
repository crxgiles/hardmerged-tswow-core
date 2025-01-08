import { std } from "wow/wotlk";
import { BARBARIAN_SPELLS } from "./learnspells";


// Handles adding the Barbarian Class to the game.
export const BARBARIAN_CLASS =
    std.Classes.create(
        // Mod id
        'classmodules/barbarian',
        // Entity id
        'barbarian',
        // The parent name of our class.
        'WARRIOR');


// Change Class Icon
BARBARIAN_CLASS.UI.setIcon(std.Image.readFromModule('hardmerged-core', '/classmodules/assets/ClassIcons/barbarian-class-icon5.blp'));

// Which races can play this class.
BARBARIAN_CLASS.Races.add(['HUMAN', 'ORC', 'UNDEAD', 'NIGHTELF', 'TAUREN', 'TROLL']);

// Changes the English name of the class.
BARBARIAN_CLASS.Name.enGB.set('Barbarian');

// Change display color
BARBARIAN_CLASS.UI.Color.set(0xb04e30);

// Add character description
BARBARIAN_CLASS.UI.Info.add('- Role: Damage, Tank');
BARBARIAN_CLASS.UI.Info.add('- Medium Armor: Leather');
BARBARIAN_CLASS.UI.Info.add('- Recklessly dives into battle with little regard for personal safety');
BARBARIAN_CLASS.UI.Info.add('- Uses Rage to fuel their abilities');
BARBARIAN_CLASS.UI.Description.set('Barbarians are fearless warriors who harness their primal fury to dominate in melee combat. With unmatched ferocity, they tear through enemies as berserkers or hunt their prey with deadly precision. Barbarians rely on raw strength and instinct to thrive on the battlefield, shunning magic for pure physical power.');

//Stats
BARBARIAN_CLASS.Stats.Strength.set((old, level) => (old) + (level - 2)); // Primary Scaling
BARBARIAN_CLASS.Stats.Agility.set((old, level) => (old) + (level - 2)); // Secondary Scaling
BARBARIAN_CLASS.Stats.Stamina.set((old, level) => (old) + (level - 2));
BARBARIAN_CLASS.Stats.Intellect.set((old, level) => (old) + (level - 2));
BARBARIAN_CLASS.Stats.Spirit.set((old, level) => (old) + (level - 2));
BARBARIAN_CLASS.Stats.BaseHP.set((old, level) => (old) + (level - 11));

//SkillLines
export const BRUTE_SKILL = std.SkillLines
    .create('hardmerged', 'brute-skill',);
BRUTE_SKILL.Name.enGB.set('Brute');

export const BERSERKER_SKILL = std.SkillLines
    .create('hardmerged', 'berserker-skill',);
BERSERKER_SKILL.Name.enGB.set('Berserker');

export const SKIRMISHER_SKILL = std.SkillLines
    .create('hardmerged', 'skirmisher-skill',);
SKIRMISHER_SKILL.Name.enGB.set('Skirmisher');

//Learned Skills
std.EquipSkills.Axes2H.enableAutolearnClass(BARBARIAN_CLASS.Mask);
std.EquipSkills.Axes1H.enableAutolearnClass(BARBARIAN_CLASS.Mask);
std.EquipSkills.FistWeapons.enableAutolearnClass(BARBARIAN_CLASS.Mask);
std.EquipSkills.Maces2H.enableAutolearnClass(BARBARIAN_CLASS.Mask);
std.EquipSkills.Maces1H.enableAutolearnClass(BARBARIAN_CLASS.Mask);
std.EquipSkills.Swords2H.enableAutolearnClass(BARBARIAN_CLASS.Mask);
std.EquipSkills.Swords1H.enableAutolearnClass(BARBARIAN_CLASS.Mask);
std.EquipSkills.Cloth.enableAutolearnClass(BARBARIAN_CLASS.Mask);
std.EquipSkills.Leather.enableAutolearnClass(BARBARIAN_CLASS.Mask);
