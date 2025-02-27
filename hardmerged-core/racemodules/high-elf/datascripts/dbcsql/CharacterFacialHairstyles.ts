import { SQL, DBC, std } from "wow/wotlk";
    
std.DBC.CharacterFacialHairStyles.queryAll({RaceID: 10}).forEach((row) => {  
    // Clone the row and set the new RaceID to 22
    // Keep the original SexID and VariationID from the source row
    const cloned = row.clone(
        22,                  // New RaceID (column 2)
        row.SexID.get(),     // Original SexID (column 3)
        row.VariationID.get() // Original VariationID (column 4)
    );  
});