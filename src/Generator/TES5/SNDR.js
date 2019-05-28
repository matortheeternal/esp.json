let {
    def, subrecord, unknown, formId, ckFormId, 
    cstring, multiStruct, arrayOfSubrecord, string, bytes, 
    uint8, format, struct, int8, div, 
    uint16, record
} = require('../helpers');

module.exports = () => {
    record('SNDR', 'Sound Descriptor', {
        members: [
            def('EDID'),
            subrecord('CNAM', unknown()),
            subrecord('GNAM', formId('Category')),
            subrecord('SNAM', ckFormId('Alternate Sound For', ['SNDR', 'NULL'])),
            arrayOfSubrecord('Sounds', multiStruct('Sound Files', [
                subrecord('ANAM', cstring('File Name'))
            ])),
            subrecord('ONAM', ckFormId('Output Model', ['SOPM', 'NULL'])),
            subrecord('FNAM', string('String')),
            def('CTDAs'),
            subrecord('LNAM', struct('Values', [
                bytes('Unknown', 1),
                format(uint8('Looping'), {
                    "0": "None",
                    "8": "Loop",
                    "16": "Envelope Fast",
                    "32": "Envelope Slow"
                }),
                bytes('Unknown', 1),
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