"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DEMONHUNTER_SPELLS = void 0;
var _manaBurn = require("./spells/ManaBurn");
var _demonhunter = require("./demonhunter");
var _alight = require("./spells/Alight");
var _metamorphosis = require("./spells/Metamorphosis");
var _splitstep = require("./spells/Splitstep");
const DEMONHUNTER_SPELLS = {
    DH_MANA_BURN: _manaBurn.DH_MANA_BURN.AutoLearn.add(1, [
        _demonhunter.DEMONHUNTER_CLASS.Mask
    ]),
    alight: _alight.alight.AutoLearn.add(1, [
        _demonhunter.DEMONHUNTER_CLASS.Mask
    ]),
    metamorphosis: _metamorphosis.metamorphosis.AutoLearn.add(1, [
        _demonhunter.DEMONHUNTER_CLASS.Mask
    ]),
    splitstep: _splitstep.splitstep.AutoLearn.add(1, [
        _demonhunter.DEMONHUNTER_CLASS.Mask
    ])
};
exports.DEMONHUNTER_SPELLS = DEMONHUNTER_SPELLS;

//# sourceMappingURL=learnspells.js.map