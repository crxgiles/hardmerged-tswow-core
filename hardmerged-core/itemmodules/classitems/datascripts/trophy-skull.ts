import { std, DBC, SQL, } from "wow/wotlk";

console.log("Hello from classitems data script!");

export const TROPHY_SKULL = std.Items
    .create(
        //Mod ID
        "itemmodules/classitems",
        //Entity ID
        "trophy-skull",
        //Parent Item = Soul Shard
        6265
    )

        .Name.enGB.set("Trophy Skull")
        .Quality.WHITE.set()
        .Flags.CANT_DESTROY.set(false)
        .MaxStack.set(20)
        .DisplayInfo.set(29236)
        .Bonding.NO_BOUNDS.set()
        .Class.MISC.set()
        
    