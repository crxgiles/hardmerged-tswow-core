"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MEDIC_SKILL = exports.MECHANIST_SKILL = exports.SAPPER_SKILL = exports.TINKER_CLASS = void 0;
var _wotlk = require("wow/wotlk");
const TINKER_CLASS = _wotlk.std.Classes.create(// Mod id
'classmodules/tinker', // Entity id
'tinker', // The parent name of our class.
'ROGUE');
exports.TINKER_CLASS = TINKER_CLASS;
// Change Class Icon
TINKER_CLASS.UI.setIcon(_wotlk.std.Image.readFromModule('hardmerged-core', '/classmodules/assets/ClassIcons/tinker-class-icon.blp'));
// Which races can play this class.
TINKER_CLASS.Races.add([
    'HUMAN',
    'DWARF',
    'GNOME',
    'DRAENEI',
    'BLOODELF',
    'ORC',
    'UNDEAD',
    'TAUREN'
]);
// Changes the English name of the class.
TINKER_CLASS.Name.enGB.set('Tinker');
// Change display color
TINKER_CLASS.UI.Color.set(16764748);
// Add character description
TINKER_CLASS.UI.Info.add('- Role: Damage, Tank');
TINKER_CLASS.UI.Info.add('- Light Armor: Cloth');
TINKER_CLASS.UI.Info.add('- Fights tooth and nail, opportunistically dealing damage when the odds are in their favor');
TINKER_CLASS.UI.Info.add('- Consumes Energy whilst running and using abilities');
TINKER_CLASS.UI.Description.set('Tinkers are daring pirates and masters of trickery, wielding their blades and firearms with unparalleled precision. With a blend of patience and ruthless cunning, their tactics are unpredictable and often dirty. Whether on the open seas or in the heat of battle, Corsairs use their strength, cunning and weaponry to dominate foes, plundering their way to victory.');
//Stats
TINKER_CLASS.Stats.Strength.set((old, level)=>old + (level - 2)
); // Primary Scaling
TINKER_CLASS.Stats.Agility.set((old, level)=>old + (level - 2)
); // Secondary Scaling
TINKER_CLASS.Stats.Stamina.set((old, level)=>old + (level - 2)
);
TINKER_CLASS.Stats.Intellect.set((old, level)=>old + (level - 2)
);
TINKER_CLASS.Stats.Spirit.set((old, level)=>old + (level - 2)
);
TINKER_CLASS.Stats.BaseHP.set((old, level)=>old + (level - 11)
);
const SAPPER_SKILL = _wotlk.std.SkillLines.create('hardmerged', 'sapper-skill');
exports.SAPPER_SKILL = SAPPER_SKILL;
SAPPER_SKILL.Name.enGB.set('Sapper');
const MECHANIST_SKILL = _wotlk.std.SkillLines.create('hardmerged', 'mechanist-skill');
exports.MECHANIST_SKILL = MECHANIST_SKILL;
MECHANIST_SKILL.Name.enGB.set('Mechanist');
const MEDIC_SKILL = _wotlk.std.SkillLines.create('hardmerged', 'medic-skill');
exports.MEDIC_SKILL = MEDIC_SKILL;
MEDIC_SKILL.Name.enGB.set('Medic');
//Learned Skills
_wotlk.std.EquipSkills.FistWeapons.enableAutolearnClass(TINKER_CLASS.Mask);
_wotlk.std.EquipSkills.Bows.enableAutolearnClass(TINKER_CLASS.Mask);
_wotlk.std.EquipSkills.Guns.enableAutolearnClass(TINKER_CLASS.Mask);
_wotlk.std.EquipSkills.Thrown.enableAutolearnClass(TINKER_CLASS.Mask);
_wotlk.std.EquipSkills.Swords1H.enableAutolearnClass(TINKER_CLASS.Mask);
_wotlk.std.EquipSkills.Swords2H.enableAutolearnClass(TINKER_CLASS.Mask);
_wotlk.std.EquipSkills.Cloth.enableAutolearnClass(TINKER_CLASS.Mask);

//# sourceMappingURL=tinker.js.map