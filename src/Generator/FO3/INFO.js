let {
    enumeration, uint8, format, flags, struct, 
    subrecord, req, ckFormId, memberArray, uint32, 
    int32, bytes, size, string, conflictType, 
    opts, memberStruct, def, empty, record
} = require('../helpers');

module.exports = () => {
    record('INFO', 'Dialog response', {
        members: [
            req(subrecord('DATA', struct('', [
                format(uint8('Type'), enumeration({
                    0: 'Topic',
                    1: 'Conversation',
                    2: 'Combat',
                    3: 'Persuasion',
                    4: 'Detection',
                    5: 'Service',
                    6: 'Miscellaneous',
                    7: 'Radio'
                })),
                format(uint8('Next Speaker'), enumeration({
                    0: 'Target',
                    1: 'Self',
                    2: 'Either'
                })),
                format(uint8('Flags 1'), flags({
                    0: 'Goodbye',
                    1: 'Random',
                    2: 'Say Once',
                    3: 'Run Immediately',
                    4: 'Info Refusal',
                    5: 'Random End',
                    6: 'Run for Rumors',
                    7: 'Speech Challenge'
                })),
                format(uint8('Flags 2'), flags({
                    0: 'Say Once a Day',
                    1: 'Always Darken'
                }))
            ]))),
            req(subrecord('QSTI', ckFormId('Quest', ['QUST']))),
            subrecord('TPIC', ckFormId('Topic', ['DIAL'])),
            subrecord('PNAM', ckFormId('Previous INFO', ['INFO', 'NULL'])),
            memberArray('Add Topics', 
                subrecord('NAME', ckFormId('Topic', ['DIAL']))
            ),
            memberArray('Responses', 
                memberStruct('Response', [
                    subrecord('TRDT', struct('Response Data', [
                        format(uint32('Emotion Type'), enumeration({
                            0: 'Neutral',
                            1: 'Anger',
                            2: 'Disgust',
                            3: 'Fear',
                            4: 'Sad',
                            5: 'Happy',
                            6: 'Surprise',
                            7: 'Pained'
                        })),
                        int32('Emotion Value'),
                        size(4, bytes('Unused')),
                        uint8('Response number'),
                        size(3, bytes('Unused')),
                        ckFormId('Sound', ['SOUN', 'NULL']),
                        format(uint8('Flags'), flags({
                            0: 'Use Emotion Animation'
                        })),
                        size(3, bytes('Unused'))
                    ])),
                    opts(req(subrecord('NAM1', conflictType('Translate', string('Response Text')))), {
                        "transform": "keepcase"
                    }),
                    req(subrecord('NAM2', conflictType('Translate', string('Script Notes')))),
                    subrecord('NAM3', string('Edits')),
                    subrecord('SNAM', ckFormId('Speaker Animation', ['IDLE'])),
                    subrecord('LNAM', ckFormId('Listener Animation', ['IDLE']))
                ])
            ),
            def('CTDAs'),
            memberArray('Choices', 
                subrecord('TCLT', ckFormId('Choice', ['DIAL']))
            ),
            memberArray('Link From', 
                subrecord('TCLF', ckFormId('Topic', ['DIAL']))
            ),
            req(memberStruct('Script (Begin)', [
                req(def('EmbeddedScript'))
            ])),
            req(memberStruct('Script (End)', [
                subrecord('NEXT', empty('Marker')),
                req(def('EmbeddedScript'))
            ])),
            subrecord('SNDD', ckFormId('Unused', ['SOUN'])),
            opts(subrecord('RNAM', string('Prompt')), {
                "transform": "keepcase"
            }),
            subrecord('ANAM', ckFormId('Speaker', ['CREA', 'NPC_'])),
            subrecord('KNAM', ckFormId('ActorValue/Perk', ['AVIF', 'PERK'])),
            subrecord('DNAM', format(uint32('Speech Challenge'), enumeration({
                0: '---',
                1: 'Very Easy',
                2: 'Easy',
                3: 'Average',
                4: 'Hard',
                5: 'Very Hard'
            })))
        ]
    })
};