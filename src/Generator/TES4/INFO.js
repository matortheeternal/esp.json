let {
    enumeration, uint8, format, flags, struct, 
    subrecord, req, ckFormId, memberArray, uint32, 
    int32, bytes, size, string, conflictType, 
    opts, memberStruct, def, record
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
                    6: 'Miscellaneous'
                })),
                format(uint8('Next Speaker'), enumeration({
                    0: 'Target',
                    1: 'Self',
                    2: 'Either'
                })),
                format(uint8('Flags'), flags({
                    0: 'Goodbye',
                    1: 'Random',
                    2: 'Say Once',
                    3: 'Run Immediately',
                    4: 'Info Refusal',
                    5: 'Random End',
                    6: 'Run for Rumors'
                }))
            ]))),
            req(subrecord('QSTI', ckFormId('Quest', ['QUST']))),
            subrecord('TPIC', ckFormId('Topic', ['DIAL'])),
            subrecord('PNAM', ckFormId('Previous INFO', ['INFO', 'NULL'])),
            memberArray('Add topics', 
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
                            6: 'Surprise'
                        })),
                        int32('Emotion Value'),
                        size(4, bytes('Unused')),
                        uint8('Response number'),
                        size(3, bytes('Unused'))
                    ])),
                    opts(subrecord('NAM1', conflictType('Translate', string('Response Text'))), {
                        "transform": "keepcase"
                    }),
                    subrecord('NAM2', conflictType('Translate', string('Actor notes')))
                ])
            ),
            def('CTDAs'),
            memberArray('Choices', 
                subrecord('TCLT', ckFormId('Choice', ['DIAL']))
            ),
            memberArray('Link From', 
                subrecord('TCLF', ckFormId('Topic', ['DIAL']))
            ),
            def('ResultScript')
        ]
    })
};