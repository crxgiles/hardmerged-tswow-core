"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GUNPOWDER_SKILL = exports.SWASHBUCKLER_SKILL = exports.SEAWOLF_SKILL = exports.CORSAIR_CLASS = void 0;
var _wotlk = require("wow/wotlk");
const CORSAIR_CLASS = _wotlk.std.Classes.create(// Mod id
'classmodules/corsair', // Entity id
'corsair', // The parent name of our class.
'ROGUE');
exports.CORSAIR_CLASS = CORSAIR_CLASS;
// Change Class Icon
CORSAIR_CLASS.UI.setIcon(_wotlk.std.Image.readFromModule('hardmerged-core', '/classmodules/assets/ClassIcons/corsair-class-icon.blp'));
// Which races can play this class.
CORSAIR_CLASS.Races.add([
    'HUMAN',
    'DWARF',
    'GNOME',
    'DRAENEI',
    'BLOODELF',
    'ORC',
    'UNDEAD',
    'NIGHTELF',
    'TAUREN',
    'TROLL'
]);
// Changes the English name of the class.
CORSAIR_CLASS.Name.enGB.set('Corsair');
// Change display color
CORSAIR_CLASS.UI.Color.set(11513516);
// Add character description
CORSAIR_CLASS.UI.Info.add('- Role: Damage, Tank');
CORSAIR_CLASS.UI.Info.add('- Light Armor: Cloth');
CORSAIR_CLASS.UI.Info.add('- Fights tooth and nail, opportunistically dealing damage when the odds are in their favor');
CORSAIR_CLASS.UI.Info.add('- Consumes Energy whilst running and using abilities');
CORSAIR_CLASS.UI.Description.set('Corsairs are daring pirates and masters of trickery, wielding their blades and firearms with unparalleled precision. With a blend of patience and ruthless cunning, their tactics are unpredictable and often dirty. Whether on the open seas or in the heat of battle, Corsairs use their strength, cunning and weaponry to dominate foes, plundering their way to victory.');
//Stats
CORSAIR_CLASS.Stats.Strength.set((old, level)=>old + (level - 2)
); // Primary Scaling
CORSAIR_CLASS.Stats.Agility.set((old, level)=>old + (level - 2)
); // Secondary Scaling
CORSAIR_CLASS.Stats.Stamina.set((old, level)=>old + (level - 2)
);
CORSAIR_CLASS.Stats.Intellect.set((old, level)=>old + (level - 2)
);
CORSAIR_CLASS.Stats.Spirit.set((old, level)=>old + (level - 2)
);
CORSAIR_CLASS.Stats.BaseHP.set((old, level)=>old + (level - 11)
);
const SEAWOLF_SKILL = _wotlk.std.SkillLines.create('hardmerged', 'seawolf-skill');
exports.SEAWOLF_SKILL = SEAWOLF_SKILL;
SEAWOLF_SKILL.Name.enGB.set('Sea Wolf');
const SWASHBUCKLER_SKILL = _wotlk.std.SkillLines.create('hardmerged', 'swashbuckler-skill');
exports.SWASHBUCKLER_SKILL = SWASHBUCKLER_SKILL;
SWASHBUCKLER_SKILL.Name.enGB.set('Swashbuckler');
const GUNPOWDER_SKILL = _wotlk.std.SkillLines.create('hardmerged', 'gunpowder-skill');
exports.GUNPOWDER_SKILL = GUNPOWDER_SKILL;
GUNPOWDER_SKILL.Name.enGB.set('Gunpowder');
//Learned Skills
_wotlk.std.EquipSkills.FistWeapons.enableAutolearnClass(CORSAIR_CLASS.Mask);
_wotlk.std.EquipSkills.Bows.enableAutolearnClass(CORSAIR_CLASS.Mask);
_wotlk.std.EquipSkills.Guns.enableAutolearnClass(CORSAIR_CLASS.Mask);
_wotlk.std.EquipSkills.Thrown.enableAutolearnClass(CORSAIR_CLASS.Mask);
_wotlk.std.EquipSkills.Swords1H.enableAutolearnClass(CORSAIR_CLASS.Mask);
_wotlk.std.EquipSkills.Swords2H.enableAutolearnClass(CORSAIR_CLASS.Mask);
_wotlk.std.EquipSkills.Cloth.enableAutolearnClass(CORSAIR_CLASS.Mask);

//# sourceMappingURL=corsair.js.map