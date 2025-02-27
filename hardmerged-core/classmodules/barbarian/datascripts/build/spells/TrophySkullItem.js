"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RUBBER_SWORD = void 0;
var _wotlk = require("wow/wotlk");
const RUBBER_SWORD = _wotlk.std.Items.create('my-mod', 'rubber-sword-item', 2131);
exports.RUBBER_SWORD = RUBBER_SWORD;
RUBBER_SWORD.Description.set({
    enGB: 'Sword made of Rubber'
});
RUBBER_SWORD.Quality.BLUE;
RUBBER_SWORD.Stats.addAgility(10);
// Remove old damage settings
RUBBER_SWORD.Damage.clearAll();
RUBBER_SWORD.Damage.addPhysical(1337, 1337);
RUBBER_SWORD.Damage.addFire(7331, 7331);
// Set the delay to 10ms. Try hitting a dummy with this
RUBBER_SWORD.Delay.set(10);

//# sourceMappingURL=TrophySkullItem.js.map