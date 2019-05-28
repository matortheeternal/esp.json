let {
    def, subrecord, string, unknown, float, 
    struct, ckFormId, uint32, arrayOfSubrecord, multiStruct, 
    record
} = require('../helpers');

module.exports = () => {
    record('AVIF', 'Actor Value Information', {
        members: [
            def('EDID'),
            def('FULL'),
            def('DESCReq'),
            subrecord('ANAM', string('Abbreviation')),
            subrecord('CNAM', unknown()),
            subrecord('AVSK', struct('Skill', [
                float('Skill Use Mult'),
                float('Skill Offset Mult'),
                float('Skill Improve Mult'),
                float('Skill Improve Offset')
            ])),
            arrayOfSubrecord('Perk Tree', undefined)
        ]
    })
};