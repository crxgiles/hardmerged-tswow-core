"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.alight = void 0;
var _wotlk = require("wow/wotlk");
const alight = _wotlk.std.Spells.create("hardmerged", "spell.alight")//Set the name
.Name.enGB.set("Alight")//Set the description
.Description.enGB.set("Launch yourself 40 yd into the air and slowfall.")//Set the duration
.Duration.setSimple(10000)//Set the cooldown
.Cooldown.Time.set(60000)//Set the GCD
.Cooldown.GlobalTime.set(1500)//Add effects
.Effects.addMod((x)=>x.Type.APPLY_AURA.set().Aura.FEATHER_FALL.set().ImplicitTargetA.UNIT_CASTER.set()
)//Add tags
.Tags.addUnique("hardmerged", "spell.alight");
exports.alight = alight;

//# sourceMappingURL=Alight.js.map