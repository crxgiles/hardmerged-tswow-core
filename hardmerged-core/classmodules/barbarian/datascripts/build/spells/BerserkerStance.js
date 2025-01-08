"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BERSERKER_TRANCE = void 0;
var _wotlk = require("wow/wotlk");
var _barbarian = require("../barbarian");
const BERSERKER_TRANCE = _wotlk.std.Spells.create('ts-wowintroduction', 'berserker-stance', 2458);
exports.BERSERKER_TRANCE = BERSERKER_TRANCE;
BERSERKER_TRANCE.Name.enGB.set('Berserker Trance');
BERSERKER_TRANCE.Description.enGB.set('Assume a state of trance, increasing Critical Hit chance by 3% but increasing all damage taken by 5%.');
BERSERKER_TRANCE.SkillLines.add(_barbarian.BERSERKER_SKILL.ID);

//# sourceMappingURL=BerserkerStance.js.map