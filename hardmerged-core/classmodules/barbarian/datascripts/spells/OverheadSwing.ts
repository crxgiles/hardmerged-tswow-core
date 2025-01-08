import { std } from "wow/wotlk";
import { BRUTE_SKILL } from "../barbarian";

export const OVERHEADSWING =
    std.Spells.create('hardmerged', 'overhead-swing',78)

//Set the name
OVERHEADSWING.Name.enGB.set('Overhead Swing');
//Set the description
OVERHEADSWING.Description.enGB.set('Swing your weapon overhead, increasing the damage of your next attack by $s1.');
//Set skill line
OVERHEADSWING.SkillLines.add(BRUTE_SKILL.ID)
//Set Resource Bar cost to 15
OVERHEADSWING.Power.CostBase.set(150)
//Set visual to Obliterate Visual cast but with Blood Boil Impact
OVERHEADSWING.Visual.modRefCopy(x=>x
    .CastKit.modRefCopy(x=>x
        .ChestEffect.modRefCopy(x=>x
            .Name.set("Maul Cast Bears")
            .Filename.set("Spells\\Maul.mdx")
            .AreaSize.set(1)
            .Scale.set(1,0.009999999776482582,70)
        )
        .CameraShake.set(0)
        .Flags.set(0)
        .Sound.set(0)
        .CharProcedures.addMod(x=>x
            .Type.ANIMATION.set()
            .Param0.set(1)
        )
        .BaseEffect.modRefCopy(x=>x
            .Name.set("Obliterate (Slash)")
            .Filename.set("Spells\\DeathKnight_Obliterate.mdx")
            .AreaSize.set(0)
            .Scale.set(1,0.009999999776482582,100)
        )
        .CameraShake.set(0)
        .Flags.set(0)
        .Sound.set(13156)
        .CharProcedures.addMod(x=>x
            .Type.WEAPON_TRAIL.set()
            .Color.set(1266473853)
            .FadeOutRate.set(0)
            .Duration.set(0)
            .Alpha.set(0)
        )
        .Animation.SPECIAL2_H.set()
        .StartAnimation.set(-1)
    )
    .ImpactKit.modRefCopy(x=>x
        .ChestEffect.modRefCopy(x=>x
            .Name.set("BloodBoil_Impact_Chest (Death Knight)")
            .Filename.set("SPELLS\\DeathKnight_BloodBoil.mdx")
            .AreaSize.set(1)
            .Scale.set(2,0.009999999776482582,100)
        )
        .CameraShake.set(0)
        .Flags.set(0)
        .Sound.set(12870)
        .Animation.set(-1)
        .StartAnimation.STAND.set()
    )
)
// Use Barbarian Overhead Swing icon
OVERHEADSWING.Icon.setPath("Barbarian_OverheadSwing")