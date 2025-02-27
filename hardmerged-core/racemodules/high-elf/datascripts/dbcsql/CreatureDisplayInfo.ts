import { SQL, DBC, std } from "wow/wotlk";

std.DBC.CreatureDisplayInfo.queryAll({ModelID: 315}).forEach((row) => {  
    // Clone the row and set the new RaceID while keeping the original ClassID
    const cloned = row.clone(
        22,                  // New RaceID (column 2)
        {}                   // Optional: Creator object (empty for default behavior)
    );  
});