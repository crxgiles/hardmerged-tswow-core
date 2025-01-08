"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SKIRMISHER_SKILL = exports.BERSERKER_SKILL = exports.BRUTE_SKILL = exports.BARBARIAN_CLASS = void 0;
var _wotlk = require("wow/wotlk");
const BARBARIAN_CLASS = _wotlk.std.Classes.create(// Mod id
'classmodules/barbarian', // Entity id
'barbarian', // The parent name of our class.
'WARRIOR');
exports.BARBARIAN_CLASS = BARBARIAN_CLASS;
// Change Class Icon
BARBARIAN_CLASS.UI.setIcon(_wotlk.std.Image.readFromModule('hardmerged-core', '/classmodules/assets/ClassIcons/barbarian-class-icon5.blp'));
// Which races can play this class.
BARBARIAN_CLASS.Races.add([
    'HUMAN',
    'ORC',
    'UNDEAD',
    'NIGHTELF',
    'TAUREN',
    'TROLL'
]);
// Changes the English name of the class.
BARBARIAN_CLASS.Name.enGB.set('Barbarian');
// Change display color
BARBARIAN_CLASS.UI.Color.set(11554352);
// Add character description
BARBARIAN_CLASS.UI.Info.add('- Role: Damage, Tank');
BARBARIAN_CLASS.UI.Info.add('- Medium Armor: Leather');
BARBARIAN_CLASS.UI.Info.add('- Recklessly dives into battle with little regard for personal safety');
BARBARIAN_CLASS.UI.Info.add('- Uses Rage to fuel their abilities');
BARBARIAN_CLASS.UI.Description.set('Barbarians are fearless warriors who harness their primal fury to dominate in melee combat. With unmatched ferocity, they tear through enemies as berserkers or hunt their prey with deadly precision. Barbarians rely on raw strength and instinct to thrive on the battlefield, shunning magic for pure physical power.');
//Stats
BARBARIAN_CLASS.Stats.Strength.set((old, level)=>old + (level - 2)
); // Primary Scaling
BARBARIAN_CLASS.Stats.Agility.set((old, level)=>old + (level - 2)
); // Secondary Scaling
BARBARIAN_CLASS.Stats.Stamina.set((old, level)=>old + (level - 2)
);
BARBARIAN_CLASS.Stats.Intellect.set((old, level)=>old + (level - 2)
);
BARBARIAN_CLASS.Stats.Spirit.set((old, level)=>old + (level - 2)
);
BARBARIAN_CLASS.Stats.BaseHP.set((old, level)=>old + (level - 11)
);
const BRUTE_SKILL = _wotlk.std.SkillLines.create('hardmerged', 'brute-skill');
exports.BRUTE_SKILL = BRUTE_SKILL;
BRUTE_SKILL.Name.enGB.set('Brute');
const BERSERKER_SKILL = _wotlk.std.SkillLines.create('hardmerged', 'berserker-skill');
exports.BERSERKER_SKILL = BERSERKER_SKILL;
BERSERKER_SKILL.Name.enGB.set('Berserker');
const SKIRMISHER_SKILL = _wotlk.std.SkillLines.create('hardmerged', 'skirmisher-skill');
exports.SKIRMISHER_SKILL = SKIRMISHER_SKILL;
SKIRMISHER_SKILL.Name.enGB.set('Skirmisher');
//Learned Skills
_wotlk.std.EquipSkills.Axes2H.enableAutolearnClass(BARBARIAN_CLASS.Mask);
_wotlk.std.EquipSkills.Axes1H.enableAutolearnClass(BARBARIAN_CLASS.Mask);
_wotlk.std.EquipSkills.FistWeapons.enableAutolearnClass(BARBARIAN_CLASS.Mask);
_wotlk.std.EquipSkills.Maces2H.enableAutolearnClass(BARBARIAN_CLASS.Mask);
_wotlk.std.EquipSkills.Maces1H.enableAutolearnClass(BARBARIAN_CLASS.Mask);
_wotlk.std.EquipSkills.Swords2H.enableAutolearnClass(BARBARIAN_CLASS.Mask);
_wotlk.std.EquipSkills.Swords1H.enableAutolearnClass(BARBARIAN_CLASS.Mask);
_wotlk.std.EquipSkills.Cloth.enableAutolearnClass(BARBARIAN_CLASS.Mask);
_wotlk.std.EquipSkills.Leather.enableAutolearnClass(BARBARIAN_CLASS.Mask);

//# sourceMappingURL=barbarian.js.map