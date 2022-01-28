let {
    def, int32, format, subrecord, req, 
    uint32, float, array, count, struct, 
    string, conflictType, record
} = require('../helpers');

module.exports = () => {
    record('SKIL', 'Skill', {
        members: [
            def('EDID'),
            req(subrecord('INDX', format(int32('Skill'), def('ActorValueEnum')))),
            def('DESC'),
            def('ICON'),
            req(subrecord('DATA', struct('Skill Data', [
                format(int32('Action'), def('ActorValueEnum')),
                format(int32('Attribute'), def('ActorValueEnum')),
                format(uint32('Specialization'), def('SpecializationEnum')),
                count(2, array('Use Values', 
                    float('Use Value')
                ))
            ]))),
            req(subrecord('ANAM', conflictType('Translate', string('Apprentice Text')))),
            req(subrecord('JNAM', conflictType('Translate', string('Journeyman Text')))),
            req(subrecord('ENAM', conflictType('Translate', string('Expert Text')))),
            req(subrecord('MNAM', conflictType('Translate', string('Master Text'))))
        ]
    })
};