import { std } from "wow/wotlk";


// Handles adding the Corsair Class to the game.
export const CORSAIR_CLASS =
    std.Classes.create(
        // Mod id
        'classmodules/corsair',
        // Entity id
        'corsair',
        // The parent name of our class.
        'ROGUE');


// Change Class Icon
CORSAIR_CLASS.UI.setIcon(std.Image.readFromModule('hardmerged-core', '/classmodules/assets/ClassIcons/corsair-class-icon.blp'));

// Which races can play this class.
CORSAIR_CLASS.Races.add(['HUMAN', 'DWARF', 'GNOME', 'DRAENEI', 'BLOODELF','ORC', 'UNDEAD', 'NIGHTELF', 'TAUREN', 'TROLL']);

// Changes the English name of the class.
CORSAIR_CLASS.Name.enGB.set('Corsair');

// Change display color
CORSAIR_CLASS.UI.Color.set(0xafaeac);

// Add character description
CORSAIR_CLASS.UI.Info.add('- Role: Damage, Tank');
CORSAIR_CLASS.UI.Info.add('- Light Armor: Cloth');
CORSAIR_CLASS.UI.Info.add('- Fights tooth and nail, opportunistically dealing damage when the odds are in their favor');
CORSAIR_CLASS.UI.Info.add('- Consumes Energy whilst running and using abilities');
CORSAIR_CLASS.UI.Description.set('Corsairs are daring pirates and masters of trickery, wielding their blades and firearms with unparalleled precision. With a blend of patience and ruthless cunning, their tactics are unpredictable and often dirty. Whether on the open seas or in the heat of battle, Corsairs use their strength, cunning and weaponry to dominate foes, plundering their way to victory.');

//Stats
CORSAIR_CLASS.Stats.Strength.set((old, level) => (old) + (level - 2)); // Primary Scaling
CORSAIR_CLASS.Stats.Agility.set((old, level) => (old) + (level - 2)); // Secondary Scaling
CORSAIR_CLASS.Stats.Stamina.set((old, level) => (old) + (level - 2));
CORSAIR_CLASS.Stats.Intellect.set((old, level) => (old) + (level - 2));
CORSAIR_CLASS.Stats.Spirit.set((old, level) => (old) + (level - 2));
CORSAIR_CLASS.Stats.BaseHP.set((old, level) => (old) + (level - 11));

//SkillLines
export const SEAWOLF_SKILL = std.SkillLines
    .create('hardmerged', 'seawolf-skill',);
SEAWOLF_SKILL.Name.enGB.set('Sea Wolf');

export const SWASHBUCKLER_SKILL = std.SkillLines
    .create('hardmerged', 'swashbuckler-skill',);
SWASHBUCKLER_SKILL.Name.enGB.set('Swashbuckler');

export const GUNPOWDER_SKILL = std.SkillLines
    .create('hardmerged', 'gunpowder-skill',);
GUNPOWDER_SKILL.Name.enGB.set('Gunpowder');

//Learned Skills
std.EquipSkills.FistWeapons.enableAutolearnClass(CORSAIR_CLASS.Mask);
std.EquipSkills.Bows.enableAutolearnClass(CORSAIR_CLASS.Mask);
std.EquipSkills.Guns.enableAutolearnClass(CORSAIR_CLASS.Mask);
std.EquipSkills.Thrown.enableAutolearnClass(CORSAIR_CLASS.Mask);
std.EquipSkills.Swords1H.enableAutolearnClass(CORSAIR_CLASS.Mask);
std.EquipSkills.Swords2H.enableAutolearnClass(CORSAIR_CLASS.Mask);
std.EquipSkills.Cloth.enableAutolearnClass(CORSAIR_CLASS.Mask);


