export function Main(events: TSEvents) {



    // Convert runes to death runes and change player model.

    events.Spell.OnCast(UTAG("hardmerged", "spell.metamorphosis"), (spell) => {

        const caster = ToPlayer(spell.GetCaster());
        if ( !caster ) return;

        for ( let i = 0; i < 6; i++ ) {
            caster.SetRuneCooldown(i, 0, false);
            caster.ConvertRune(i, 3);
        }

        caster.ResyncRunes();

        const player = ToPlayer(spell.GetCaster());
        if ( !player ) return;

    });

    events.Spell.OnAfterEffectApply(UTAG("hardmerged", "spell.metamorphosis"), (spell) => {

        const player = ToPlayer(spell.GetCaster());
        if ( !player ) return;

            player.SetDisplayID(16164);
            player.SetScale(1);
        
    });

    // Remove Metamorphosis aura OnLogin to avoid issues with runes. Can probably be fixed better way later with more core edits.

    events.Player.OnLogin((player, firstLogin) => {

        player.RemoveAura(UTAG("hardmerged", "spell.metamorphosis"));

    });



    // Remove the complementary auras when Metamorphosis is removed.

    events.Spell.OnRemove(UTAG("hardmerged", "spell.metamorphosis"), (effect, application, type) => {

        const player = ToPlayer(effect.GetCaster());
        if ( !player ) return;

        player.RemoveAura(UTAG("hardmerged", "spell.metamorphosis.modify-movement-speed-and-armor"));
        player.RemoveAura(UTAG("hardmerged", "spell.metamorphosis.modify-runes-and-autoattack"));
        player.RemoveAura(UTAG("hardmerged", "spell.metamorphosis.modify-haste"));

    });

}