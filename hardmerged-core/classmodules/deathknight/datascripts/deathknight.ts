import { std } from "wow/wotlk";

// Rename talent trees
std.DBC.TalentTab.query({ID: 398})    // Blood
    .Name.enGB.set('Runesmith');
std.DBC.TalentTab.query({ID: 399})    // Frost
    .Name.enGB.set('Baron');
std.DBC.TalentTab.query({ID: 400})    // Unholy
    .Name.enGB.set('Plagues');
