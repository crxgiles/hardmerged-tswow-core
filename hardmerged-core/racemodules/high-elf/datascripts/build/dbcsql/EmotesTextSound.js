"use strict";
var _wotlk = require("wow/wotlk");
_wotlk.std.DBC.EmotesTextSound.queryAll({
    RaceID: 10
}).forEach((row)=>{
    // Clone the row and set the new RaceMask
    const cloned = row.clone(22, {
    } // Optional: Creator object (empty for default behavior)
    );
});

//# sourceMappingURL=EmotesTextSound.js.map