"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TROPHY_SKULL = void 0;
var _wotlk = require("wow/wotlk");
console.log("Hello from classitems data script!");
const TROPHY_SKULL = _wotlk.std.Items.create(//Mod ID
"itemmodules/classitems", //Entity ID
"trophy-skull", //Parent Item = Soul Shard
6265).Name.enGB.set("Trophy Skull").Quality.WHITE.set().Flags.CANT_DESTROY.set(false).MaxStack.set(20).DisplayInfo.set(29236).Bonding.NO_BOUNDS.set().Class.MISC.set();
exports.TROPHY_SKULL = TROPHY_SKULL;

//# sourceMappingURL=trophy-skull.js.map