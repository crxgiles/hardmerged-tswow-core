import { SQL, DBC, std } from "wow/wotlk";

std.DBC.BarberShopStyle.queryAll({Race: 10}).forEach((row) => {  
    // Clone the row and set the new RaceID to 22
    const cloned = row.clone(
        22,                  // New RaceID (column 2)
        {}                   // Optional: Creator object (empty for default behavior)
    );  

    // Optionally, update other fields if needed
    cloned.Sex.set(row.Sex.get());     // Keep the original SexID
});