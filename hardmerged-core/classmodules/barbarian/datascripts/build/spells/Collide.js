"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.COLLIDE = void 0;
var _wotlk = require("wow/wotlk");
var _barbarian = require("../barbarian");
const COLLIDE = _wotlk.std.Spells.create('ts-wowintroduction', 'COLLIDE', 100);
exports.COLLIDE = COLLIDE;
//Set the name
COLLIDE.Name.enGB.set('Collide');
//Set the description
COLLIDE.Description.enGB.set('Collide with an enemy, generate 9 rage, and stun it for 1.50 sec. Cannot be used in combat.');
//Set skill line
COLLIDE.SkillLines.add(_barbarian.BRUTE_SKILL.ID);
//Set the icon
COLLIDE.Icon.setPath("Barbarian_Collide")//Remove Battle Stance req
.ShapeshiftMask.Include.set(BigInt(0)).ShapeshiftMask.Exclude.set(BigInt(0)).TargetAuraSpell.Exclude.set(0)//Remove dummy effect, Generate 10 Rage
.Effects.clear(1).Effects.mod(1, (eff)=>{
    eff.Type.ENERGIZE.set().PowerType.RAGE.set().PowerBase.set(100, 'EFFECTIVE').ImplicitTargetA.UNIT_CASTER.set();
});
//Custom Visual
COLLIDE.Visual.modRefCopy((x1)=>x1.CastKit.modRefCopy((x2)=>x2.BaseEffect.modRefCopy((x)=>x.Name.set("DustCloud Land").Filename.set("Spells\\DustCloud_Land.mdx").AreaSize.set(1).Scale.set(1, 0.009999999776482582, 100)
        ).ChestEffect.modRefCopy((x)=>x.Name.set("Collide Trail Cast").Filename.set("Spells\\Backstab_cast_base.m2").AreaSize.set(0).Scale.set(2, 0.009999999776482582, 100)
        ).CameraShake.set(0).Flags.set(0).Sound.set(3330).CharProcedures.addMod((x)=>x.Type.WEAPON_TRAIL.set().Color.set(1264257808).FadeOutRate.set(0).Duration.set(0).Alpha.set(0)
        ).Animation.set(-1).StartAnimation.set(-1)
    ).ImpactKit.modRefCopy((x3)=>x3.ChestEffect.modRefCopy((x)=>x.Name.set("Collide Impact Chest").Filename.set("SPELLS\\Backstab_impact_chest.m2").AreaSize.set(1).Scale.set(3, 0.009999999776482582, 100)
        ).CameraShake.set(0).Flags.set(0).Sound.set(4120).Animation.set(-1).StartAnimation.STAND.set()
    )
);
// Load charge data
console.log(_wotlk.std.Spells.load(100).codify({
}));
// Load berserker stance
console.log(_wotlk.std.Spells.load(34846).codify({
}));

//# sourceMappingURL=Collide.js.map