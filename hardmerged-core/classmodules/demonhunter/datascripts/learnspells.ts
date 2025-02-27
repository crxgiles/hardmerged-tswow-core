import { std } from "wow/wotlk";
import { DH_MANA_BURN } from "./spells/ManaBurn";
import { DEMONHUNTER_CLASS } from "./demonhunter";
import { alight } from "./spells/Alight";
import { metamorphosis } from "./spells/Metamorphosis";
import { splitstep } from "./spells/Splitstep";

export const DEMONHUNTER_SPELLS = {
    DH_MANA_BURN: DH_MANA_BURN.AutoLearn.add(1, [DEMONHUNTER_CLASS.Mask]),
    alight: alight.AutoLearn.add(1, [DEMONHUNTER_CLASS.Mask]),
    metamorphosis: metamorphosis.AutoLearn.add(1, [DEMONHUNTER_CLASS.Mask]),
    splitstep: splitstep.AutoLearn.add(1, [DEMONHUNTER_CLASS.Mask]),
}