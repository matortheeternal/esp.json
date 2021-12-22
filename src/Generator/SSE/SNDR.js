let {
    def, unknown, subrecord, formId, ckFormId, 
    string, memberStruct, memberArray, localized, conflict, 
    bytes, size, enumeration, uint8, format, 
    struct, int8, div, uint16, record
} = require('../helpers');

module.exports = () => {
    record('SNDR', 'Sound Descriptor', {
        members: [
            def('EDID'),
            subrecord('CNAM', unknown()),
            subrecord('GNAM', formId('Category')),
            subrecord('SNAM', ckFormId('Alternate Sound For', ['SNDR', 'NULL'])),
            memberArray('Sounds', 
                memberStruct('Sound Files', [
                    subrecord('ANAM', string('File Name'))
                ])
            ),
            subrecord('ONAM', ckFormId('Output Model', ['SOPM', 'NULL'])),
            subrecord('FNAM', conflict('Ignore', localized(string('String')))),
            def('CTDAs'),
            subrecord('LNAM', struct('Values', [
                size(1, bytes('Unknown')),
                format(uint8('Looping'), enumeration({
                    0: 'None',
                    8: 'Loop',
                    16: 'Envelope Fast',
                    32: 'Envelope Slow'
                })),
                size(1, bytes('Unknown')),
                uint8('Rumble Send Value = (Small / 7) + ((Big / 7) * 16)')
            ])),
            subrecord('BNAM', struct('Values', [
                int8('% Frequency Shift'),
                int8('% Frequency Variance'),
                uint8('Priority'),
                uint8('db Variance'),
                format(uint16('Static Attenuation (db)'), div(100))
            ]))
        ]
    })
};