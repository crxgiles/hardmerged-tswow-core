export function Main(events: TSEvents) {

    events.Spell.OnCast(UTAG("hardmerged", "spell.alight"), (spell) => {

        const caster = ToPlayer(spell.GetCaster());
        if ( !caster ) return;
        
        caster.MoveJump(caster.GetPosition().x, caster.GetPosition().y, caster.GetPosition().z + 40, 50, 20, 0);

    });

}