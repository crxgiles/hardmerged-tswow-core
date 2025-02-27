"use strict";
var _wotlk = require("wow/wotlk");
_wotlk.std.DBC.CharBaseInfo.queryAll({
    RaceID: 10
}).forEach((row)=>{
    // Clone the row and set the new RaceID while keeping the original ClassID
    const cloned = row.clone(22, row.ClassID.get(), {
    } // Optional: Creator object (empty for default behavior)
    );
});

//# sourceMappingURL=CharBaseInfo.js.map