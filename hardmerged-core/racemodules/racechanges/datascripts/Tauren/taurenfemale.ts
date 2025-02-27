import { std, DBC } from "wow/wotlk";
import { RaceIDs } from "wow/wotlk/std/Race/RaceType";

// Load ChrRaces.dbc and get the Tauren row
const chrRaces = std.DBC.ChrRaces;
const taurenRace = chrRaces.getRow(RaceIDs.TAUREN);

if (!taurenRace) {
    console.error("Tauren race not found in ChrRaces.dbc");
    process.exit(1);
}

// Log the current display ID for debugging
const currentDisplayID = taurenRace.FemaleDisplayId.get();
console.log(`Current Female Tauren Display ID: ${currentDisplayID}`);

// Set the correct female tauren display ID (standard is 205, adjust if different)
const CORRECT_FEMALE_TAUREN_DISPLAY_ID = 205;
taurenRace.FemaleDisplayId.set(CORRECT_FEMALE_TAUREN_DISPLAY_ID);
console.log(`Updated Female Tauren Display ID: ${taurenRace.FemaleDisplayId.get()}`);

// Load CreatureDisplayInfo.dbc and get the corrected female tauren row
const creatureDisplayInfo = std.DBC.CreatureDisplayInfo;
const femaleTaurenDisplay = creatureDisplayInfo.getRow(CORRECT_FEMALE_TAUREN_DISPLAY_ID);

if (femaleTaurenDisplay) {
    const currentScale = femaleTaurenDisplay.CreatureModelScale.get();
    console.log(`Original Female Tauren Scale (ID ${CORRECT_FEMALE_TAUREN_DISPLAY_ID}): ${currentScale}`);

    const newScale = currentScale * 0.5;
    femaleTaurenDisplay.CreatureModelScale.set(newScale);
    console.log(`New Female Tauren Scale (ID ${CORRECT_FEMALE_TAUREN_DISPLAY_ID}): ${newScale}`);

    const modelID = femaleTaurenDisplay.ModelID.get();
    console.log(`Model ID: ${modelID}`);

    // Check the model details in CreatureModelData.dbc
    const modelData = std.DBC.CreatureModelData.getRow(modelID);
    if (modelData) {
        console.log(`Model Name: ${modelData.ModelName.get()}, Base Model Scale: ${modelData.ModelScale.get()}`);
    }
} else {
    console.error(`Female Tauren display ID ${CORRECT_FEMALE_TAUREN_DISPLAY_ID} not found in CreatureDisplayInfo.dbc`);
}