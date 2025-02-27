"use strict";
var _wotlk = require("wow/wotlk");
_wotlk.std.DBC.CharacterFacialHairStyles.queryAll({
    RaceID: 10
}).forEach((row)=>{
    // Clone the row and set the new RaceID to 22
    // Keep the original SexID and VariationID from the source row
    const cloned = row.clone(22, row.SexID.get(), row.VariationID.get() // Original VariationID (column 4)
    );
});

//# sourceMappingURL=CharacterFacialHairstyles.js.map