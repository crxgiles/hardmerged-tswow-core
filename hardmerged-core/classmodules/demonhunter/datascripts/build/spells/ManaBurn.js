"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DH_MANA_BURN = void 0;
var _wotlk = require("wow/wotlk");
var _demonhunter = require("../demonhunter");
const DH_MANA_BURN = _wotlk.std.Spells.create('hardmerged', 'dhmanaburn', 11981)//Set the name
.Name.enGB.set('Mana Burn')//Set the description
.Description.enGB.set("Sends a bolt of negative energy that burns a target enemy unit's mana. Burned mana combusts, dealing damage to the target equal to the amount of mana burned.")//Set skill line
.SkillLines.add(_demonhunter.VENGEANCE_SKILL.ID)//Set GCD
.Cooldown.GlobalTime.set(1500)//Set Rune cost
.Power.CostBase.set(0).Power.Type.RUNES.set().Power.RuneCost.setSimple(0, 0, 0, 1)//Set cast time to 0
.CastTime.set(0)//Remove dummy effect, Generate 10 Runic Power
.Effects.clear(1).Effects.mod(1, (eff)=>{
    eff.Type.ENERGIZE.set().PowerType.RUNIC_POWER.set().PowerBase.set(100, 'EFFECTIVE').ImplicitTargetA.UNIT_CASTER.set();
});
exports.DH_MANA_BURN = DH_MANA_BURN;
//Load the Mana Burn spell variant that has a fiery animation
const FIERY_MANA_BURN = _wotlk.std.Spells.load(66100);
DH_MANA_BURN.Visual.set(FIERY_MANA_BURN.Visual.get());

//# sourceMappingURL=ManaBurn.js.map