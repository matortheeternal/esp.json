let {
    req, def, formId, struct, subrecord, 
    record
} = require('../helpers');

module.exports = () => {
    record('DOBJ', 'Default Object Manager', {
        members: [
            req(def('EDID')),
            req(subrecord('DATA', struct('Default Objects', [
                formId('Stimpack'),
                formId('SuperStimpack'),
                formId('RadX'),
                formId('RadAway'),
                formId('Morphine'),
                formId('Perk Paralysis'),
                formId('Player Faction'),
                formId('Mysterious Stranger NPC'),
                formId('Mysterious Stranger Faction'),
                formId('Default Music'),
                formId('Battle Music'),
                formId('Death Music'),
                formId('Success Music'),
                formId('Level Up Music'),
                formId('Player Voice (Male)'),
                formId('Player Voice (Male Child)'),
                formId('Player Voice (Female)'),
                formId('Player Voice (Female Child)'),
                formId('Eat Package Default Food'),
                formId('Every Actor Ability'),
                formId('Drug Wears Off Image Space'),
                formId('Doctor\'s Bag'),
                formId('Miss Fortune NPC'),
                formId('Miss Fortune Faction'),
                formId('Meltdown Explosion'),
                formId('Unarmed Forward PA'),
                formId('Unarmed Backward PA'),
                formId('Unarmed Left PA'),
                formId('Unarmed Right PA'),
                formId('Unarmed Crouch PA'),
                formId('Unarmed Counter PA'),
                formId('Spotter Effect'),
                formId('Item Detected Effect'),
                formId('Cateye Mobile Effect (NYI)')
            ])))
        ]
    })
};