--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
local ____exports = {}
function ____exports.Main(events)
    events.Spell:OnCast(
        UTAG("hardmerged", "spell.metamorphosis"),
        function(spell)
            local caster = ToPlayer(spell:GetCaster())
            if not caster then
                return
            end
            do
                local i = 0
                while i < 6 do
                    caster:SetRuneCooldown(i, 0, false)
                    caster:ConvertRune(i, 3)
                    i = i + 1
                end
            end
            caster:ResyncRunes()
            local player = ToPlayer(spell:GetCaster())
            if not player then
                return
            end
        end
    )
    events.Spell:OnAfterEffectApply(
        UTAG("hardmerged", "spell.metamorphosis"),
        function(spell)
            local player = ToPlayer(spell:GetCaster())
            if not player then
                return
            end
            player:SetDisplayID(16164)
            player:SetScale(1)
        end
    )
    events.Player:OnLogin(function(player, firstLogin)
        player:RemoveAura(UTAG("hardmerged", "spell.metamorphosis"))
    end)
    events.Spell:OnRemove(
        UTAG("hardmerged", "spell.metamorphosis"),
        function(effect, application, ____type)
            local player = ToPlayer(effect:GetCaster())
            if not player then
                return
            end
            player:RemoveAura(UTAG("hardmerged", "spell.metamorphosis.modify-movement-speed-and-armor"))
            player:RemoveAura(UTAG("hardmerged", "spell.metamorphosis.modify-runes-and-autoattack"))
            player:RemoveAura(UTAG("hardmerged", "spell.metamorphosis.modify-haste"))
        end
    )
end
return ____exports
