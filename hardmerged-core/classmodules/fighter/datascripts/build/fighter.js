"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.class1 = void 0;
var _wotlk = require("wow/wotlk");
const class1 = _wotlk.std.DBC.ChrClasses.query({
    ID: 1
}).Name.enGB.set('Fighter').DisplayPower.set(3) // 3 = Energy
;
exports.class1 = class1;
//rename talent trees
_wotlk.std.DBC.TalentTab.query({
    ID: 161
}) //Arms
.Name.enGB.set('Weapon Arts');
_wotlk.std.DBC.TalentTab.query({
    ID: 164
}) //Fury
.Name.enGB.set('Enhancement');
_wotlk.std.DBC.TalentTab.query({
    ID: 163
}) // Protection
.Name.enGB.set('Drill Mastery');
//rename skill lines
_wotlk.std.DBC.SkillLine.query({
    ID: 26
}) // Arms
.DisplayName.enGB.set('Weapon Arts'); // Rename "Arms" to "Weapon Arts"
_wotlk.std.DBC.SkillLine.query({
    ID: 256
}) // Fury
.DisplayName.enGB.set('Enhancement'); // Rename "Fury" to "Enhancement"
_wotlk.std.DBC.SkillLine.query({
    ID: 257
}) // Protection
.DisplayName.enGB.set('Drill Mastery'); // Rename "Protection" to "Drill Mastery"

//# sourceMappingURL=fighter.js.map