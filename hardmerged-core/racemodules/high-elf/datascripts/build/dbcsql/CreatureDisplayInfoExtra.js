"use strict";
var _wotlk = require("wow/wotlk");
_wotlk.std.DBC.CreatureDisplayInfoExtra.queryAll({
    DisplayRaceID: 10
}).forEach((row)=>{
    // Clone the row and set the new RaceID while keeping the original ClassID
    const cloned = row.clone(22, {
    } // Optional: Creator object (empty for default behavior)
    );
});

//# sourceMappingURL=CreatureDisplayInfoExtra.js.map