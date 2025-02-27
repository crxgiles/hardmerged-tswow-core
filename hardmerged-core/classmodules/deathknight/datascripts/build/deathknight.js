"use strict";
var _wotlk = require("wow/wotlk");
// Rename talent trees
_wotlk.std.DBC.TalentTab.query({
    ID: 398
}) // Blood
.Name.enGB.set('Runesmith');
_wotlk.std.DBC.TalentTab.query({
    ID: 399
}) // Frost
.Name.enGB.set('Baron');
_wotlk.std.DBC.TalentTab.query({
    ID: 400
}) // Unholy
.Name.enGB.set('Plagues');

//# sourceMappingURL=deathknight.js.map