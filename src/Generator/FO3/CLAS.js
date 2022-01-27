let {
    req, def, int32, format, array, 
    count, flags, uint32, int8, uint8, 
    bytes, size, struct, subrecord, record
} = require('../helpers');

module.exports = () => {
    record('CLAS', 'Class', {
        members: [
            req(def('EDID')),
            req(def('FULL')),
            req(def('DESC')),
            def('ICON'),
            req(subrecord('DATA', struct('', [
                count(4, array('Tag Skills', 
                    format(int32('Tag Skill'), def('ActorValueEnum'))
                )),
                format(uint32('Flags'), flags({
                    0: 'Playable',
                    1: 'Guard'
                })),
                format(uint32('Buys/Sells and Services'), def('ServiceFlags')),
                format(int8('Teaches'), def('SkillEnum')),
                uint8('Maximum training level'),
                size(2, bytes('Unused'))
            ]))),
            req(subrecord('ATTR', struct('Attributes', [
                uint8('Strength'),
                uint8('Perception'),
                uint8('Endurance'),
                uint8('Charisma'),
                uint8('Intelligence'),
                uint8('Agility'),
                uint8('Luck')
            ])))
        ]
    })
};