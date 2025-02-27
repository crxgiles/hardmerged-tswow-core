"use strict";
var _wotlk = require("wow/wotlk");
//CharSections.dbc - copy each row that has 10 in the RaceID column (column 2)
_wotlk.std.DBC.CharSections.queryAll({
    RaceID: 10
}).forEach((row, i)=>{
    const cloned = row.clone(_wotlk.std.IDs.CharSections.id('mod', `key-${i}`));
    //Take the cloned row and set its new raceID in column 2 to 22
    cloned.RaceID.set(22);
});

//# sourceMappingURL=CharSections.js.map