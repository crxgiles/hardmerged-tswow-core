import { std } from "wow/wotlk";

// define class 1
export const class1 = std.DBC.ChrClasses.query({ID: 1})
    .Name.enGB.set('Fighter')
    .DisplayPower.set(3) // 3 = Energy

//rename talent trees
    std.DBC.TalentTab.query({ID: 161}) //Arms
        .Name.enGB.set('Weapon Arts');
    std.DBC.TalentTab.query({ID: 164}) //Fury
        .Name.enGB.set('Enhancement');
    std.DBC.TalentTab.query({ID: 163}) // Protection
        .Name.enGB.set('Drill Mastery');

//rename skill lines
    std.DBC.SkillLine.query({ID: 26}) // Arms
        .DisplayName.enGB.set('Weapon Arts'); // Rename "Arms" to "Weapon Arts"
    std.DBC.SkillLine.query({ID: 256}) // Fury
        .DisplayName.enGB.set('Enhancement'); // Rename "Fury" to "Enhancement"
    std.DBC.SkillLine.query({ID: 257}) // Protection
        .DisplayName.enGB.set('Drill Mastery'); // Rename "Protection" to "Drill Mastery"