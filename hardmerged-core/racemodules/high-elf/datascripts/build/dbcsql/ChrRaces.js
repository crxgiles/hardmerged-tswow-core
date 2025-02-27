"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.HighElf = void 0;
var _wotlk = require("wow/wotlk");
const HighElf = //Handles the character data, copying from Blood Elf and changing those that need to be changed such as Faction.
_wotlk.std.DBC.ChrRaces.getRow(9).clone(22, {
    Name: {
        enGB: "High Elf"
    },
    CinematicSequenceID: 0,
    FactionID: 1,
    BaseLanguage: 7,
    ClientPrefix: 'he'
});
exports.HighElf = HighElf;

//# sourceMappingURL=ChrRaces.js.map