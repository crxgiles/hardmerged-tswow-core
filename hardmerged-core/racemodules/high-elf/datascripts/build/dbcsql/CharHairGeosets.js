"use strict";
var _wotlk = require("wow/wotlk");
let newID = 1000;
_wotlk.std.DBC.CharHairGeosets.queryAll({
    RaceID: 10
}).forEach((row)=>{
    // Clone with a new ID and specify RaceID=22 in the creator object
    const cloned = row.clone(newID++, {
        RaceID: 22
    } // Creator object (sets RaceID in column 2)
    );
    cloned.SexID.set(row.SexID.get());
    cloned.VariationID.set(row.VariationID.get());
});

//# sourceMappingURL=CharHairGeosets.js.map