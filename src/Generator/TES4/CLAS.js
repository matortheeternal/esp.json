let {
    def, int32, format, sorted, array, 
    count, uint32, flags, int8, uint8, 
    uint16, struct, subrecord, req, record
} = require('../helpers');

module.exports = () => {
    record('CLAS', 'Class', {
        members: [
            def('EDID'),
            def('FULL'),
            def('DESC'),
            def('ICON'),
            req(subrecord('DATA', struct('', [
                count(2, sorted(array('Primary Attributes', 
                    format(int32('Primary Attribute'), def('ActorValueEnum'))
                ))),
                format(uint32('Specialization'), def('SpecializationEnum')),
                count(7, sorted(array('Major Skills', 
                    format(int32('Major Skill'), def('ActorValueEnum'))
                ))),
                format(uint32('Flags'), flags({
                    0: 'Playable',
                    1: 'Guard'
                })),
                format(uint32('Buys/Sells and Services'), def('ServiceFlags')),
                format(int8('Teaches'), def('SkillEnum')),
                uint8('Maximum training level'),
                uint16('Unused')
            ])))
        ]
    })
};