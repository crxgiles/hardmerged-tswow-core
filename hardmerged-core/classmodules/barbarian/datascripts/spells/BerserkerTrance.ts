import {std} from "wow/wotlk";
import { BERSERKER_SKILL } from "../barbarian";

export const BERSERKER_TRANCE =
    std.Spells.create('ts-wowintroduction', 'berserker-trance',2458)

//Set the name
BERSERKER_TRANCE.Name.enGB.set('Berserker Trance');
//Set the description
BERSERKER_TRANCE.Description.enGB.set('Assume a state of trance, increasing Critical Hit chance by 3% but increasing all damage taken by 5%.');
//Set skill line
BERSERKER_TRANCE.SkillLines.add(BERSERKER_SKILL.ID)
//Set Resource Bar cost to 15
BERSERKER_TRANCE.Power.CostBase.set(150)
//Set the icon
BERSERKER_TRANCE.Icon.setPath("Barbarian_BerserkerTrance")
BERSERKER_TRANCE.ActiveIcon.setPath("Barbarian_BerserkerTrance")
