"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.splitstepThird = exports.splitstepSecond = exports.splitstep = void 0;
var _wotlk = require("wow/wotlk");
const splitstep = _wotlk.std.Spells.create("hardmerged", "spell.splitstep").Name.enGB.set("Splitstep").Description.enGB.set("Dash forward (diagonally right) and then dash a second time (diagonally left).").Duration.setSimple(5000).Cooldown.Time.set(30000).Cooldown.GlobalTime.set(1500).Attributes.HIDE_FROM_AURA_BAR.set(1).AuraInterruptFlags.setBit(25, 1).Effects.addMod((x)=>x.Type.APPLY_AURA.set().Aura.DUMMY.set().ImplicitTargetA.UNIT_CASTER.set()
).Tags.addUnique("hardmerged", "spell.splitstep");
exports.splitstep = splitstep;
const splitstepSecond = _wotlk.std.Spells.create("hardmerged", "spell.splitstep-second").Name.enGB.set("Splitstep (second)").Duration.setSimple(5000).Attributes.HIDE_FROM_AURA_BAR.set(1).AuraInterruptFlags.setBit(25, 1).Effects.addMod((x)=>x.Type.APPLY_AURA.set().Aura.DUMMY.set().ImplicitTargetA.UNIT_CASTER.set()
).Tags.addUnique("hardmerged", "spell.splitstep-second");
exports.splitstepSecond = splitstepSecond;
const splitstepThird = _wotlk.std.Spells.create("hardmerged", "spell.splitstep-third").Name.enGB.set("Splitstep (third)").Duration.setSimple(5000).Attributes.HIDE_FROM_AURA_BAR.set(1).AuraInterruptFlags.setBit(25, 1).Effects.addMod((x)=>x.Type.APPLY_AURA.set().Aura.DUMMY.set().ImplicitTargetA.UNIT_CASTER.set()
).Tags.addUnique("hardmerged", "spell.splitstep-third");
exports.splitstepThird = splitstepThird;

//# sourceMappingURL=Splitstep.js.map