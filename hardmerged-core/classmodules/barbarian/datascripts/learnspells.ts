import { BERSERKER_TRANCE } from "./spells/BerserkerTrance";
import { ASSAULT } from "./spells/Assault";
import { OVERHEADSWING } from "./spells/OverheadSwing";
import { COLLIDE } from "./spells/Collide";

export const BARBARIAN_SPELLS = {
    ASSAULT: ASSAULT.AutoLearn.add(0, ASSAULT.ID),
    BERSERKER_TRANCE: BERSERKER_TRANCE.AutoLearn.add(0, BERSERKER_TRANCE.ID),
    OVERHEADSWING: OVERHEADSWING.AutoLearn.add(0, OVERHEADSWING.ID),
    COLLIDE: COLLIDE.AutoLearn.add(0, COLLIDE.ID)
};
