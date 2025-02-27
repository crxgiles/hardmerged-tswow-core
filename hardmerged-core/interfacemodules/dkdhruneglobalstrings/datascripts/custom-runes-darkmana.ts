import { std } from "wow/wotlk";

//GLOBALSTRINGS LUA EDITS
    //Replacing Combat Text for Runes
    std.LUAXML.file("Interface/FrameXML/GlobalStrings.lua").replace('COMBAT_TEXT_RUNE_BLOOD = "Blood Rune";','COMBAT_TEXT_RUNE_BLOOD = "Fel Rune";')
    std.LUAXML.file("Interface/FrameXML/GlobalStrings.lua").replace('COMBAT_TEXT_RUNE_UNHOLY = "Unholy Rune";','COMBAT_TEXT_RUNE_UNHOLY = "Arcane Rune";')
    std.LUAXML.file("Interface/FrameXML/GlobalStrings.lua").replace('COMBAT_TEXT_RUNE_FROST = "Frost Rune";','COMBAT_TEXT_RUNE_FROST = "Shadow Rune";')

    //Replacing Rune Cost Text
    std.LUAXML.file("Interface/FrameXML/GlobalStrings.lua").replace('RUNE_COST_BLOOD = "%d Blood";','RUNE_COST_BLOOD = "%d Fel";')
    std.LUAXML.file("Interface/FrameXML/GlobalStrings.lua").replace('RUNE_COST_UNHOLY = "%d Unholy";','RUNE_COST_UNHOLY = "%d Arcane";')
    std.LUAXML.file("Interface/FrameXML/GlobalStrings.lua").replace('RUNE_COST_FROST = "%d Frost";','RUNE_COST_FROST = "%d Shadow";')

    //Replace Runic Power with Dark Mana
    std.LUAXML.file("Interface/FrameXML/GlobalStrings.lua").replace(
        'RUNIC_POWER = "Runic Power";',
        'RUNIC_POWER = "Dark Mana";'
    );
    //Replacing Runic Power Error Message
    std.LUAXML.file("Interface/FrameXML/GlobalStrings.lua").replace('ERR_OUT_OF_RUNIC_POWER = "Not enough runic power";','ERR_OUT_OF_RUNIC_POWER = "Not enough dark mana";')

    //Replacing per 5 text for Runic Power
    std.LUAXML.file("Interface/FrameXML/GlobalStrings.lua").replace('ITEM_MOD_POWER_REGEN6_SHORT = "Runic Power Per 5 Sec.";','ITEM_MOD_POWER_REGEN6_SHORT = "Dark Mana Per 5 Sec.";')

    //Replacing Requires Runic Power message
    std.LUAXML.file("Interface/FrameXML/GlobalStrings.lua").replace('REQUIRES_RUNIC_POWER = "Requires Runic Power";','REQUIRES_RUNIC_POWER = "Requires Dark Mana";')

    //Replacing Runic Power Cost Text
    std.LUAXML.file("Interface/FrameXML/GlobalStrings.lua").replace('RUNIC_POWER_COST = "%d Runic Power";','RUNIC_POWER_COST = "%d Dark Mana";')
    std.LUAXML.file("Interface/FrameXML/GlobalStrings.lua").replace('RUNIC_POWER_COST_PER_TIME = "%d Runic Power, plus %d per sec";','RUNIC_POWER_COST_PER_TIME = "%d Dark Mana, plus %d per sec";')