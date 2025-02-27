import { SQL, DBC, std } from "wow/wotlk";

std.DBC.SkillRaceClassInfo.queryAll({RaceMask: 10}).forEach((row) => {  
    // Clone the row and set the new RaceMask
    const cloned = row.clone(
        22,                  // New RaceMask (column 2)
        {}                   // Optional: Creator object (empty for default behavior)
    );  

    // Optionally, update other fields if needed
    cloned.ClassMask.set(row.ClassMask.get()); // Keep the original ClassMask
});