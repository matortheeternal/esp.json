let {
    flags, def, unknown, subrecord, uint16, 
    format, div, struct, ckFormId, conflict, 
    enumeration, uint8, memberArray, formId, uint32, 
    bytes, size, localized, string, opts, 
    memberStruct, empty, record
} = require('../helpers');

module.exports = () => {
    record('INFO', 'Dialog response', {
        flags: flags({
            12: 'Ignored',
            13: 'Actor Changed'
        }),
        members: [
            def('EDID'),
            def('VMADFragmentedINFO'),
            subrecord('DATA', unknown()),
            subrecord('ENAM', struct('Response flags', [
                format(uint16('Flags'), flags({
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
                })),
                format(uint16('Reset Hours'), div(2730))
            ])),
            subrecord('TPIC', ckFormId('Topic', ['DIAL'])),
            subrecord('PNAM', conflict('Benign', ckFormId('Previous INFO', ['INFO', 'NULL']))),
            subrecord('CNAM', format(uint8('Favor Level'), enumeration({
                0: 'None',
                1: 'Small',
                2: 'Medium',
                3: 'Large'
            }))),
            memberArray('Link To', 
                subrecord('TCLT', ckFormId('Response', [
                    'DIAL', 'INFO', 'NULL'
                ]))
            ),
            subrecord('DNAM', formId('Response Data')),
            memberArray('Responses', 
                memberStruct('Response', [
                    subrecord('TRDT', struct('Response Data', [
                        format(uint32('Emotion Type'), def('EmotionTypeEnum')),
                        uint32('Emotion Value'),
                        size(4, bytes('Unused')),
                        uint8('Response number'),
                        size(3, bytes('Unused')),
                        ckFormId('Sound', ['SNDR', 'NULL']),
                        format(uint8('Flags'), flags({
                            0: 'Use Emotion Animation'
                        })),
                        size(3, bytes('Unused'))
                    ])),
                    opts(subrecord('NAM1', conflict('Translate', localized(string('Response Text')))), {
                        "keepCase": true
                    }),
                    subrecord('NAM2', string('Script Notes')),
                    subrecord('NAM3', string('Edits')),
                    subrecord('SNAM', ckFormId('Idle Animations: Speaker', ['IDLE'])),
                    subrecord('LNAM', ckFormId('Idle Animations: Listener', ['IDLE']))
                ])
            ),
            def('CTDAs'),
            conflict('Ignore', memberArray('Unknown', 
                memberStruct('Unknown', [
                    subrecord('SCHR', unknown()),
                    subrecord('QNAM', formId('Unknown')),
                    subrecord('NEXT', empty('Marker'))
                ])
            )),
            subrecord('RNAM', conflict('Translate', localized(string('Prompt')))),
            subrecord('ANAM', ckFormId('Speaker', ['NPC_'])),
            subrecord('TWAT', ckFormId('Walk Away Topic', ['DIAL'])),
            subrecord('ONAM', ckFormId('Audio Output Override', ['SOPM']))
        ]
    })
};