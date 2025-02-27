"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.VENGEANCE_SKILL = exports.DEMONISM_SKILL = exports.TRACKER_SKILL = exports.DEMONHUNTER_CLASS = void 0;
var _wotlk = require("wow/wotlk");
const DEMONHUNTER_CLASS = _wotlk.std.Classes.create(// Mod id
'classmodules/demonhunter', // Entity id
'demonhunter', // The parent name of our class.
'DEATH_KNIGHT');
exports.DEMONHUNTER_CLASS = DEMONHUNTER_CLASS;
//Add Runes ID to the SQL table
for(let i = 0; i < 32; i++){
    _wotlk.std.SQL.class_has_runes.add(DEMONHUNTER_CLASS.ID, i);
}
// Change Class Icon
DEMONHUNTER_CLASS.UI.setIcon(_wotlk.std.Image.readFromModule('hardmerged-core', '/classmodules/assets/ClassIcons/demon-hunter-class-icon.blp'));
// Which races can play this class.
DEMONHUNTER_CLASS.Races.add([
    'HUMAN',
    'NIGHTELF',
    'DRAENEI',
    'BLOODELF',
    'ORC',
    'TAUREN'
]);
// Changes the English name of the class.
DEMONHUNTER_CLASS.Name.enGB.set('Demon Hunter');
// Change display color
DEMONHUNTER_CLASS.UI.Color.set(5715967);
//Change display power - 5 is runes, 6 is runic power
DEMONHUNTER_CLASS.DisplayPower.set(5);
DEMONHUNTER_CLASS.DisplayPower.set(6);
// Add character description
DEMONHUNTER_CLASS.UI.Info.add('- Role: Damage, Tank');
DEMONHUNTER_CLASS.UI.Info.add('- Light Armor: Cloth');
DEMONHUNTER_CLASS.UI.Info.add('- Fights tooth and nail, opportunistically dealing damage when the odds are in their favor');
DEMONHUNTER_CLASS.UI.Info.add('- Consumes Energy whilst running and using abilities');
DEMONHUNTER_CLASS.UI.Description.set('Demon Hunters are fierce warriors who have forsaken their own kind to fight against the demonic forces that threaten their world. With a blend of patience and ruthless cunning, their tactics are unpredictable and often dirty. Whether on the open seas or in the heat of battle, Corsairs use their strength, cunning and weaponry to dominate foes, plundering their way to victory.');
//Stats
DEMONHUNTER_CLASS.Stats.Strength.set((old, level)=>old + (level - 2)
); // Primary Scaling
DEMONHUNTER_CLASS.Stats.Agility.set((old, level)=>old + (level - 2)
); // Secondary Scaling
DEMONHUNTER_CLASS.Stats.Stamina.set((old, level)=>old + (level - 2)
);
DEMONHUNTER_CLASS.Stats.Intellect.set((old, level)=>old + (level - 2)
);
DEMONHUNTER_CLASS.Stats.Spirit.set((old, level)=>old + (level - 2)
);
DEMONHUNTER_CLASS.Stats.BaseHP.set((old, level)=>old + (level - 11)
);
const TRACKER_SKILL = _wotlk.std.SkillLines.create('hardmerged', 'tracker-skill');
exports.TRACKER_SKILL = TRACKER_SKILL;
TRACKER_SKILL.Name.enGB.set('Tracker');
const DEMONISM_SKILL = _wotlk.std.SkillLines.create('hardmerged', 'demonism-skill');
exports.DEMONISM_SKILL = DEMONISM_SKILL;
DEMONISM_SKILL.Name.enGB.set('Demonism');
const VENGEANCE_SKILL = _wotlk.std.SkillLines.create('hardmerged', 'vengeance-skill');
exports.VENGEANCE_SKILL = VENGEANCE_SKILL;
VENGEANCE_SKILL.Name.enGB.set('Vengeance');
//Learned Skills
_wotlk.std.EquipSkills.FistWeapons.enableAutolearnClass(DEMONHUNTER_CLASS.Mask);
_wotlk.std.EquipSkills.Bows.enableAutolearnClass(DEMONHUNTER_CLASS.Mask);
_wotlk.std.EquipSkills.Guns.enableAutolearnClass(DEMONHUNTER_CLASS.Mask);
_wotlk.std.EquipSkills.Thrown.enableAutolearnClass(DEMONHUNTER_CLASS.Mask);
_wotlk.std.EquipSkills.Swords1H.enableAutolearnClass(DEMONHUNTER_CLASS.Mask);
_wotlk.std.EquipSkills.Swords2H.enableAutolearnClass(DEMONHUNTER_CLASS.Mask);
_wotlk.std.EquipSkills.Cloth.enableAutolearnClass(DEMONHUNTER_CLASS.Mask);
//Add DH form
console.log(_wotlk.std.Spells.load(47241).codify({
}));

//# sourceMappingURL=demonhunter.js.map