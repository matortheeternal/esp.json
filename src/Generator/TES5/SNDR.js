let {
    def, subrecord, unknown, formId, ckFormId, 
    string, multiStruct, arrayOfSubrecord, lstring, bytes, 
    uint8, struct, int8, div, uint16, 
    record
} = require('../helpers');

module.exports = () => {
    record('SNDR', 'Sound Descriptor', {
        members: [
            def('EDID'),
            subrecord('CNAM', unknown()),
            subrecord('GNAM', formId('Category')),
            subrecord('SNAM', ckFormId('Alternate Sound For', ['SNDR', 'NULL'])),
            arrayOfSubrecord('Sounds', undefined),
            subrecord('ONAM', ckFormId('Output Model', ['SOPM', 'NULL'])),
            subrecord('FNAM', lstring(String)),
            def('CTDAs'),
            subrecord('LNAM', struct('Values', [
                bytes('Unknown', 1),
                uint8('Looping', {
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
                uint16('Static Attenuation (db)', div(100))
            ]))
        ]
    })
};