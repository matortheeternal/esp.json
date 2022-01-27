let {
    req, def, flags, uint8, format, 
    bytes, size, float, struct, subrecord, 
    int16, string, conflictType, opts, ckFormId, 
    memberStruct, memberArray, sortKey, sorted, int32, 
    record
} = require('../helpers');

module.exports = () => {
    record('QUST', 'Quest', {
        members: [
            req(def('EDID')),
            def('SCRI'),
            def('FULL'),
            def('ICON'),
            req(subrecord('DATA', struct('General', [
                format(uint8('Flags'), flags({
                    0: 'Start game enabled',
                    1: '',
                    2: 'Allow repeated conversation topics',
                    3: 'Allow repeated stages',
                    4: 'Unknown 4'
                })),
                uint8('Priority'),
                size(2, bytes('Unused')),
                float('Quest Delay')
            ]))),
            def('CTDAs'),
            sorted(memberArray('Stages', 
                sortKey([0], memberStruct('Stage', [
                    subrecord('INDX', int16('Stage Index')),
                    memberArray('Log Entries', 
                        memberStruct('Log Entry', [
                            subrecord('QSDT', format(uint8('Stage Flags'), flags({
                                0: 'Complete Quest',
                                1: 'Fail Quest'
                            }))),
                            def('CTDAs'),
                            opts(subrecord('CNAM', conflictType('Translate', string('Log Entry'))), {
                                "transform": "keepcase"
                            }),
                            req(def('EmbeddedScript')),
                            subrecord('NAM0', ckFormId('Next Quest', ['QUST']))
                        ])
                    )
                ]))
            )),
            memberArray('Objectives', 
                memberStruct('Objective', [
                    subrecord('QOBJ', int32('Objective Index')),
                    opts(req(subrecord('NNAM', string('Description'))), {
                        "transform": "keepcase"
                    }),
                    memberArray('Targets', 
                        memberStruct('Target', [
                            subrecord('QSTA', struct('Target', [
                                opts(ckFormId('Target', [
                                    'REFR', 'PGRE', 'PMIS', 'PBEA', 'ACRE',
                                    'ACHR'
                                ]), {
                                    "persistent": true
                                }),
                                format(uint8('Flags'), flags({
                                    0: 'Compass Marker Ignores Locks'
                                })),
                                size(3, bytes('Unused'))
                            ])),
                            def('CTDAs')
                        ])
                    )
                ])
            )
        ]
    })
};