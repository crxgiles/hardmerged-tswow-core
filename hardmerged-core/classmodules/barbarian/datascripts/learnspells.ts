import { BARBARIAN_CLASS } from "./barbarian";
import { BERSERKER_TRANCE } from "./spells/BerserkerTrance";
import { ASSAULT } from "./spells/Assault";
import { OVERHEADSWING } from "./spells/OverheadSwing";
import { COLLIDE } from "./spells/Collide";

export const BARBARIAN_SPELLS = {
    ASSAULT: ASSAULT.AutoLearn.add(1, [BARBARIAN_CLASS.Mask]),
    BERSERKER_TRANCE: BERSERKER_TRANCE.AutoLearn.add(1, [BARBARIAN_CLASS.Mask]),
    OVERHEADSWING: OVERHEADSWING.AutoLearn.add(1, [BARBARIAN_CLASS.Mask]),
    COLLIDE: COLLIDE.AutoLearn.add(1, [BARBARIAN_CLASS.Mask])
};
