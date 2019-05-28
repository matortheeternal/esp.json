let {
    def, subrecord, unknown, uint16, div, 
    struct, ckFormId, uint8, arrayOfSubrecord, formId, 
    uint32, bytes, string, multiStruct, lstring, 
    record
} = require('../helpers');

module.exports = () => {
    record('INFO', 'Dialog response', {
        flags: {
            "13": "Actor Changed"
        },
        members: [
            def('EDID'),
            def('VMADFragmentedINFO'),
            subrecord('DATA', unknown()),
            subrecord('ENAM', struct('Response flags', [
                uint16('Flags', {
                    "0": "Goodbye",
                    "1": "Random",
                    "2": "Say once",
                    "3": "Unknown 4",
                    "4": "Unknown 5",
                    "5": "Random end",
                    "6": "Invisible continue",
                    "7": "Walk Away",
                    "8": "Walk Away Invisible in Menu",
                    "9": "Force subtitle",
                    "10": "Can move while greeting",
                    "11": "No LIP File",
                    "12": "Requires post-processing",
                    "13": "Audio Output Override",
                    "14": "Spends favor points",
                    "15": "Unknown 16"
                }),
                uint16('Reset Hours', div(2730))
            ])),
            subrecord('TPIC', ckFormId('Topic', ['DIAL'])),
            subrecord('PNAM', ckFormId('Previous INFO', ['INFO', 'NULL'])),
            subrecord('CNAM', uint8('Favor Level', {
                "0": "None",
                "1": "Small",
                "2": "Medium",
                "3": "Large"
            })),
            arrayOfSubrecord('Link To', undefined),
            subrecord('DNAM', formId('Response Data')),
            arrayOfSubrecord('Responses', undefined),
            def('CTDAs'),
            arrayOfSubrecord('Unknown', undefined),
            subrecord('RNAM', lstring(Prompt)),
            subrecord('ANAM', ckFormId('Speaker', ['NPC_'])),
            subrecord('TWAT', ckFormId('Walk Away Topic', ['DIAL'])),
            subrecord('ONAM', ckFormId('Audio Output Override', ['SOPM']))
        ]
    })
};