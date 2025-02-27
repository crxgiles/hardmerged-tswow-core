import { SQL, DBC, std } from "wow/wotlk";
    
    //CharSections.dbc - copy each row that has 10 in the RaceID column (column 2)
    std.DBC.CharSections.queryAll({RaceID: 10}).forEach((row, i) => {
        const cloned = row.clone(std.IDs.CharSections.id('mod', `key-${i}`))
            //Take the cloned row and set its new raceID in column 2 to 22
            cloned.RaceID.set(22);
    });