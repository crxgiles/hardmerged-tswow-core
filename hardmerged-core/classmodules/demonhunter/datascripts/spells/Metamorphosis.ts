import { std } from "wow/wotlk";
import { CreatureDisplayInfoDBCFile } from "wow/wotlk/dbc/CreatureDisplayInfo";
import { CreatureDisplayInfo } from "wow/wotlk/std/Creature/CreatureDisplayInfo";



// TODO: Currently making autoattack hit multiple targets or extending it's range isn't possible without core edits afaik.



const CONFIG = {
    duration: 45000,
    cooldown: 180000
}



const metamorphosisModifyHaste = std.Spells
    .create("hardmerged", "spell.metamorphosis.modify-haste")
    .Name.enGB.set("Metamorphosis (modify haste)")
    .Duration.setSimple(CONFIG.duration)
    .Cooldown.Time.set(CONFIG.cooldown)
    .Attributes.HIDE_FROM_AURA_BAR.set(1)
    .Effects.addMod(x=>x
        .Type.APPLY_AURA.set()
        .Aura.MOD_MELEE_RANGED_HASTE.set()
        .PercentBase.set(34)
        .PercentDieSides.set(1)
        .ImplicitTargetA.UNIT_CASTER.set()
    )
    .Effects.addMod(x=>x
        .Type.APPLY_AURA.set()
        .Aura.MOD_SCALE.set()
        .PercentBase.set(34)
        .PercentDieSides.set(1)
        .ImplicitTargetA.UNIT_CASTER.set()
    )
    .Effects.addMod(x=>x
        .Type.APPLY_AURA.set()
        .Aura.MOD_CASTING_SPEED_NOT_STACK.set()
        .PercentBase.set(34)
        .PercentDieSides.set(1)
        .ImplicitTargetA.UNIT_CASTER.set()
    )
    .Tags.addUnique("hardmerged", "spell.metamorphosis.modify-haste")
;



const metamorphosisModifyRunesAndAutoattacks = std.Spells
    .create("hardmerged", "spell.metamorphosis.modify-runes-and-autoattack")
    .Name.enGB.set("Metamorphosis (modify runes and autoattack)")
    .Duration.setSimple(CONFIG.duration)
    .Cooldown.Time.set(CONFIG.cooldown)
    .Attributes.HIDE_FROM_AURA_BAR.set(1)
    .Effects.addMod(x=>x
        .Type.APPLY_AURA.set()
        .MiscValueA.set(6)
        .MiscValueB.set(3)
        .Aura.CONVERT_RUNE.set()
        .CountBase.set(5)
        .CountDieSides.set(1)
        .Rune.DEATH.set()
        .ImplicitTargetA.UNIT_CASTER.set()
    )
    .Effects.addMod(x=>x
        .Type.TRIGGER_SPELL.set()
        .TriggerSpell.set(metamorphosisModifyHaste.ID)
    )
    .Tags.addUnique("hardmerged", "spell.metamorphosis.modify-runes-and-autoattack")
;



const metamorphosisModifyMovementSpeedAndArmor = std.Spells
    .create("hardmerged", "spell.metamorphosis.modify-movement-speed-and-armor")
    .Name.enGB.set("Metamorphosis (modify movement speed and armor)")
    .Duration.setSimple(CONFIG.duration)
    .Cooldown.Time.set(CONFIG.cooldown)
    .Attributes.HIDE_FROM_AURA_BAR.set(1)
    .Effects.addMod(x=>x
        .Type.APPLY_AURA.set()
        .Aura.MOD_INCREASE_SPEED.set()
        .PercentBase.set(34)
        .PercentDieSides.set(1)
        .ImplicitTargetA.UNIT_CASTER.set()
    )
    .Effects.addMod(x=>x
        .Type.APPLY_AURA.set()
        .MiscValueA.set(1)
        .Aura.MOD_RESISTANCE_PCT.set()
        .PercentBase.set(99)
        .PercentDieSides.set(1)
        .ImplicitTargetA.UNIT_CASTER.set()
    )
    .Effects.addMod(x=>x
        .Type.TRIGGER_SPELL.set()
        .TriggerSpell.set(metamorphosisModifyRunesAndAutoattacks.ID)
    )
    .Tags.addUnique("hardmerged", "spell.metamorphosis.modify-movement-speed-and-armor")
;



export const metamorphosis = std.Spells
    .create("hardmerged", "spell.metamorphosis")
    .Name.enGB.set("Metamorphosis")
    .Description.enGB.set("Reset all rune cooldowns and all runes become death runes. Haste and movement speed increased by 35%, and armor is increased by 100%.")
    .Power.Type.RUNIC_POWER.set()
    .Power.CostBase.set(600)
    .Duration.setSimple(CONFIG.duration)
    .Cooldown.Time.set(CONFIG.cooldown)
    .Effects.addMod(x=>x
        .Type.APPLY_AURA.set()
        .Aura.MOD_SHAPESHIFT.set()
        .Form.set(22)
        .ImplicitTargetA.UNIT_CASTER.set()
    )
    .Effects.addMod(x=>x
        .Type.TRIGGER_SPELL.set()
        .TriggerSpell.set(metamorphosisModifyMovementSpeedAndArmor.ID)
    )
    .Tags.addUnique("hardmerged", "spell.metamorphosis")
;