"use strict";
var _wotlk = require("wow/wotlk");
// Rename talent trees
_wotlk.std.DBC.TalentTab.query({
    ID: 81
}) // Arcane
.Name.enGB.set('Spellbreaker');
_wotlk.std.DBC.TalentTab.query({
    ID: 41
}) // Fire
.Name.enGB.set('Shadow');
_wotlk.std.DBC.TalentTab.query({
    ID: 61
}) // Frost
.Name.enGB.set('Elemental');
// Rename skill lines
_wotlk.std.DBC.SkillLine.query({
    ID: 237
}) // Arcane
.DisplayName.enGB.set('Spellbreaker');
_wotlk.std.DBC.SkillLine.query({
    ID: 8
}) // Fire
.DisplayName.enGB.set('Shadow');
_wotlk.std.DBC.SkillLine.query({
    ID: 6
}) // Frost
.DisplayName.enGB.set('Elemental');

//# sourceMappingURL=mage.js.map