import { std } from "wow/wotlk";

// Rename talent trees
std.DBC.TalentTab.query({ID: 81})    // Arcane
    .Name.enGB.set('Spellbreaker');
std.DBC.TalentTab.query({ID: 41})    // Fire
    .Name.enGB.set('Shadow');
std.DBC.TalentTab.query({ID: 61})    // Frost
    .Name.enGB.set('Elemental');

// Rename skill lines
std.DBC.SkillLine.query({ID: 237})   // Arcane
    .DisplayName.enGB.set('Spellbreaker');
std.DBC.SkillLine.query({ID: 8})     // Fire
    .DisplayName.enGB.set('Shadow');
std.DBC.SkillLine.query({ID: 6})     // Frost
    .DisplayName.enGB.set('Elemental');

