"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BERSERKER_TRANCE = void 0;
var _wotlk = require("wow/wotlk");
var _barbarian = require("../barbarian");
const BERSERKER_TRANCE = _wotlk.std.Spells.create('ts-wowintroduction', 'berserker-trance', 2458);
exports.BERSERKER_TRANCE = BERSERKER_TRANCE;
//Set the name
BERSERKER_TRANCE.Name.enGB.set('Berserker Trance');
//Set the description
BERSERKER_TRANCE.Description.enGB.set('Assume a state of trance, increasing Critical Hit chance by 3% but increasing all damage taken by 5%.');
//Set skill line
BERSERKER_TRANCE.SkillLines.add(_barbarian.BERSERKER_SKILL.ID);
//Set Resource Bar cost to 15
BERSERKER_TRANCE.Power.CostBase.set(150);
//Set the icon
BERSERKER_TRANCE.Icon.setPath("Barbarian_BerserkerTrance");
BERSERKER_TRANCE.ActiveIcon.setPath("Barbarian_BerserkerTrance");

//# sourceMappingURL=BerserkerTrance.js.map