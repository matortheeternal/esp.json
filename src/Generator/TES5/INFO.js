let {
    def, subrecord, unknown, uint16, format, 
    div, struct, ckFormId, uint8, arrayOfSubrecord, 
    formId, uint32, bytes, cstring, multiStruct, 
    empty, string, record
} = require('../helpers');

module.exports = () => {
    record('INFO', 'Dialog response', {
        flags: {
            13: 'Actor Changed'
        },
        members: [
            def('EDID'),
            def('VMADFragmentedINFO'),
            subrecord('DATA', unknown()),
            subrecord('ENAM', struct('Response flags', [
                format(uint16('Flags'), {
                    0: 'Goodbye',
                    1: 'Random',
                    2: 'Say once',
                    3: 'Unknown 4',
                    4: 'Unknown 5',
                    5: 'Random end',
                    6: 'Invisible continue',
                    7: 'Walk Away',
                    8: 'Walk Away Invisible in Menu',
                    9: 'Force subtitle',
                    10: 'Can move while greeting',
                    11: 'No LIP File',
                    12: 'Requires post-processing',
                    13: 'Audio Output Override',
                    14: 'Spends favor points',
                    15: 'Unknown 16'
                }),
                format(uint16('Reset Hours'), div(2730))
            ])),
            subrecord('TPIC', ckFormId('Topic', ['DIAL'])),
            subrecord('PNAM', ckFormId('Previous INFO', ['INFO', 'NULL'])),
            subrecord('CNAM', format(uint8('Favor Level'), {
                0: 'None',
                1: 'Small',
                2: 'Medium',
                3: 'Large'
            })),
            arrayOfSubrecord('Link To', 
                subrecord('TCLT', ckFormId('Response', [
                    'DIAL',    'INFO',    'NULL'
                ]))
            ),
            subrecord('DNAM', formId('Response Data')),
            arrayOfSubrecord('Responses', 
                multiStruct('Response', [
                    subrecord('TRDT', struct('Response Data', [
                        format(uint32('Emotion Type'), def('EmotionTypeEnum')),
                        uint32('Emotion Value'),
                        bytes('Unused', 4),
                        uint8('Response number'),
                        bytes('Unused', 3),
                        ckFormId('Sound', ['SNDR', 'NULL']),
                        format(uint8('Flags'), {
                            0: 'Use Emotion Animation'
                        }),
                        bytes('Unused', 3)
                    ])),
                    subrecord('NAM1', string('Response Text')),
                    subrecord('NAM2', cstring('Script Notes')),
                    subrecord('NAM3', cstring('Edits')),
                    subrecord('SNAM', ckFormId('Idle Animations: Speaker', ['IDLE'])),
                    subrecord('LNAM', ckFormId('Idle Animations: Listener', ['IDLE']))
                ])
            ),
            def('CTDAs'),
            arrayOfSubrecord('Unknown', 
                multiStruct('Unknown', [
                    subrecord('SCHR', unknown()),
                    subrecord('QNAM', formId('Unknown')),
                    subrecord('NEXT', empty('Marker'))
                ])
            ),
            subrecord('RNAM', string('Prompt')),
            subrecord('ANAM', ckFormId('Speaker', ['NPC_'])),
            subrecord('TWAT', ckFormId('Walk Away Topic', ['DIAL'])),
            subrecord('ONAM', ckFormId('Audio Output Override', ['SOPM']))
        ]
    })
};