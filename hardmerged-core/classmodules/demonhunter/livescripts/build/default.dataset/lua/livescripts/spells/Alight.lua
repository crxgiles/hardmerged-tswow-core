--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
local ____exports = {}
function ____exports.Main(events)
    events.Spell:OnCast(
        UTAG("hardmerged", "spell.alight"),
        function(spell)
            local caster = ToPlayer(spell:GetCaster())
            if not caster then
                return
            end
            caster:MoveJump(
                caster:GetPosition().x,
                caster:GetPosition().y,
                caster:GetPosition().z + 40,
                50,
                20,
                0
            )
        end
    )
end
return ____exports
