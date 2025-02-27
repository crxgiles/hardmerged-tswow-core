"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BARBARIAN_SPELLS = void 0;
var _barbarian = require("./barbarian");
var _berserkerTrance = require("./spells/BerserkerTrance");
var _assault = require("./spells/Assault");
var _overheadSwing = require("./spells/OverheadSwing");
var _collide = require("./spells/Collide");
const BARBARIAN_SPELLS = {
    ASSAULT: _assault.ASSAULT.AutoLearn.add(1, [
        _barbarian.BARBARIAN_CLASS.Mask
    ]),
    BERSERKER_TRANCE: _berserkerTrance.BERSERKER_TRANCE.AutoLearn.add(1, [
        _barbarian.BARBARIAN_CLASS.Mask
    ]),
    OVERHEADSWING: _overheadSwing.OVERHEADSWING.AutoLearn.add(1, [
        _barbarian.BARBARIAN_CLASS.Mask
    ]),
    COLLIDE: _collide.COLLIDE.AutoLearn.add(1, [
        _barbarian.BARBARIAN_CLASS.Mask
    ])
};
exports.BARBARIAN_SPELLS = BARBARIAN_SPELLS;

//# sourceMappingURL=learnspells.js.map