import {std} from "wow/wotlk";
import { BERSERKER_SKILL } from "../barbarian";

export const ASSAULT =
    std.Spells.create('hardmerged', 'assault',20252)

//Set the name
ASSAULT.Name.enGB.set('Assault');
//Set the description
ASSAULT.Description.enGB.set('Charge at an enemy with intent to harm, causing 100% weapon damage and stunning it for 3 sec.');
//Set skill line
ASSAULT.SkillLines.add(BERSERKER_SKILL.ID)
//Set Resource Bar cost to 0
ASSAULT.Power.CostBase.set(0)

//Load the Battle Stance spell
const BATTLE_STANCE = std.Spells.load(2457)

//Copy the spell icon
ASSAULT.Icon.set(BATTLE_STANCE.Icon.get())
//Copy the spell anim
ASSAULT.Visual.set(BATTLE_STANCE.Visual.get())