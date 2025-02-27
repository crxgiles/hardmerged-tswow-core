import { SQL, DBC, std } from "wow/wotlk";

export const HighElf = 

    //Handles the character data, copying from Blood Elf and changing those that need to be changed such as Faction.
    std.DBC.ChrRaces.getRow(9).clone(22,
    {
        Name: {enGB: "High Elf"}, //Race Name
        CinematicSequenceID: 0, //Default
        FactionID: 1, //Alliance
        BaseLanguage: 7, //Common
        ClientPrefix: 'he', //Instead of be, he = High Elf
        
    })
    
