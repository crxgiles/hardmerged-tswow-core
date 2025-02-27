import { std } from "wow/wotlk";
import { item_enchantment_templateRow } from "wow/wotlk/sql/item_enchantment_template";
import { StartGear } from "wow/wotlk/std/Class/ClassRaceData/ClassRaceStartGear";
import { ItemSetRegistry } from "wow/wotlk/std/Item/ItemSet";

// Handles adding the Tinker Class to the game.
export const TINKER_CLASS = std.Classes
    .create(
        // Mod id
        'classmodules/tinker',
        // Entity id
        'tinker',
        // The parent name of our class.
        'ROGUE');

// Change Class Icon
TINKER_CLASS.UI.setIcon(std.Image.readFromModule('hardmerged-core', '/classmodules/assets/ClassIcons/tinker-class-icon.blp'));

// Which races can play this class.
TINKER_CLASS.Races.add(['HUMAN', 'DWARF', 'GNOME', 'DRAENEI', 'BLOODELF','ORC', 'UNDEAD', 'TAUREN']);
    
// Changes the English name of the class.
TINKER_CLASS.Name.enGB.set('Tinker');

// Change display color
TINKER_CLASS.UI.Color.set(0xffcf4c);

// Add character description
TINKER_CLASS.UI.Info.add('- Role: Damage, Tank');
TINKER_CLASS.UI.Info.add('- Light Armor: Cloth');
TINKER_CLASS.UI.Info.add('- Fights tooth and nail, opportunistically dealing damage when the odds are in their favor');
TINKER_CLASS.UI.Info.add('- Consumes Energy whilst running and using abilities');
TINKER_CLASS.UI.Description.set('Tinkers are daring pirates and masters of trickery, wielding their blades and firearms with unparalleled precision. With a blend of patience and ruthless cunning, their tactics are unpredictable and often dirty. Whether on the open seas or in the heat of battle, Corsairs use their strength, cunning and weaponry to dominate foes, plundering their way to victory.');

//Stats
TINKER_CLASS.Stats.Strength.set((old, level) => (old) + (level - 2)); // Primary Scaling
TINKER_CLASS.Stats.Agility.set((old, level) => (old) + (level - 2)); // Secondary Scaling
TINKER_CLASS.Stats.Stamina.set((old, level) => (old) + (level - 2));
TINKER_CLASS.Stats.Intellect.set((old, level) => (old) + (level - 2));
TINKER_CLASS.Stats.Spirit.set((old, level) => (old) + (level - 2));
TINKER_CLASS.Stats.BaseHP.set((old, level) => (old) + (level - 11));

//SkillLines
export const SAPPER_SKILL = std.SkillLines
    .create('hardmerged', 'sapper-skill',);
SAPPER_SKILL.Name.enGB.set('Sapper');

export const MECHANIST_SKILL = std.SkillLines
    .create('hardmerged', 'mechanist-skill',);
MECHANIST_SKILL.Name.enGB.set('Mechanist');

export const MEDIC_SKILL = std.SkillLines
    .create('hardmerged', 'medic-skill',);
MEDIC_SKILL.Name.enGB.set('Medic');

//Learned Skills
std.EquipSkills.FistWeapons.enableAutolearnClass(TINKER_CLASS.Mask);
std.EquipSkills.Bows.enableAutolearnClass(TINKER_CLASS.Mask);
std.EquipSkills.Guns.enableAutolearnClass(TINKER_CLASS.Mask);
std.EquipSkills.Thrown.enableAutolearnClass(TINKER_CLASS.Mask);
std.EquipSkills.Swords1H.enableAutolearnClass(TINKER_CLASS.Mask);
std.EquipSkills.Swords2H.enableAutolearnClass(TINKER_CLASS.Mask);
std.EquipSkills.Cloth.enableAutolearnClass(TINKER_CLASS.Mask);



