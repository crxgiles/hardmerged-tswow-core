--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
local ____exports = {}
function ____exports.Main(events)
    local calcNewPosition, dashToPosition, CONFIG
    function calcNewPosition(x, y, z, o, angle, distance)
        local newOrientation = o + angle
        local newX = x + distance * math.cos(newOrientation)
        local newY = y + distance * math.sin(newOrientation)
        return {x = newX, y = newY, z = z}
    end
    function dashToPosition(player, x, y, z, maxHeight)
        local newPositionZ = player:GetMap():GetHeight(x, y, 0)
        if z > player:GetPosition().z - CONFIG.maxElevation and z < player:GetPosition().z + CONFIG.maxElevation then
            player:MoveJump(
                x,
                y,
                newPositionZ,
                CONFIG.jumpSpeed,
                maxHeight,
                0
            )
        end
    end
    CONFIG = {maxElevation = 20, jumpDistance = 15, jumpSpeed = 50, initialAngle = -0.5}
    events.Spell:OnCast(
        UTAG("hardmerged", "spell.splitstep"),
        function(spell)
            local caster = ToPlayer(spell:GetCaster())
            if not caster then
                return
            end
            local newPosition = calcNewPosition(
                caster:GetPosition().x,
                caster:GetPosition().y,
                caster:GetPosition().z,
                caster:GetPosition().o,
                CONFIG.initialAngle,
                CONFIG.jumpDistance
            )
            dashToPosition(
                caster,
                newPosition.x,
                newPosition.y,
                newPosition.z,
                0
            )
        end
    )
    events.Spell:OnRemove(
        UTAG("hardmerged", "spell.splitstep"),
        function(effect, application, ____type)
            local caster = ToPlayer(effect:GetCaster())
            if not caster then
                return
            end
            caster:CastSpell(
                caster,
                UTAG("hardmerged", "spell.splitstep-second"),
                true
            )
        end
    )
    events.Spell:OnCast(
        UTAG("hardmerged", "spell.splitstep-second"),
        function(spell)
            local caster = ToPlayer(spell:GetCaster())
            if not caster then
                return
            end
            local newPosition = calcNewPosition(
                caster:GetPosition().x,
                caster:GetPosition().y,
                caster:GetPosition().z,
                caster:GetPosition().o,
                -(CONFIG.initialAngle * 2),
                CONFIG.jumpDistance
            )
            dashToPosition(
                caster,
                newPosition.x,
                newPosition.y,
                newPosition.z,
                0
            )
        end
    )
    events.Spell:OnRemove(
        UTAG("hardmerged", "spell.splitstep-second"),
        function(effect, application, ____type)
            local caster = ToPlayer(effect:GetCaster())
            if not caster then
                return
            end
            caster:CastSpell(
                caster,
                UTAG("hardmerged", "spell.splitstep-third"),
                true
            )
        end
    )
    events.Spell:OnCast(
        UTAG("hardmerged", "spell.splitstep-third"),
        function(spell)
            local caster = ToPlayer(spell:GetCaster())
            if not caster then
                return
            end
            local newPosition = calcNewPosition(
                caster:GetPosition().x,
                caster:GetPosition().y,
                caster:GetPosition().z,
                caster:GetPosition().o,
                CONFIG.initialAngle,
                10
            )
            dashToPosition(
                caster,
                newPosition.x,
                newPosition.y,
                newPosition.z,
                10
            )
        end
    )
end
return ____exports
