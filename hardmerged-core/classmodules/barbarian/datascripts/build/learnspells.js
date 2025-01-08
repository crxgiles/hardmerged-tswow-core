"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BARBARIAN_SPELLS = void 0;
var _berserkerTrance = require("./spells/BerserkerTrance");
var _assault = require("./spells/Assault");
var _overheadSwing = require("./spells/OverheadSwing");
var _collide = require("./spells/Collide");
const BARBARIAN_SPELLS = {
    ASSAULT: _assault.ASSAULT.AutoLearn.add(0, _assault.ASSAULT.ID),
    BERSERKER_TRANCE: _berserkerTrance.BERSERKER_TRANCE.AutoLearn.add(0, _berserkerTrance.BERSERKER_TRANCE.ID),
    OVERHEADSWING: _overheadSwing.OVERHEADSWING.AutoLearn.add(0, _overheadSwing.OVERHEADSWING.ID),
    COLLIDE: _collide.COLLIDE.AutoLearn.add(0, _collide.COLLIDE.ID)
};
exports.BARBARIAN_SPELLS = BARBARIAN_SPELLS;

//# sourceMappingURL=learnspells.js.map