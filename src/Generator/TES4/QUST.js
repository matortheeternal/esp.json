let {
    def, flags, uint8, format, struct, 
    subrecord, req, int16, string, conflictType, 
    opts, memberStruct, memberArray, sortKey, sorted, 
    ckFormId, bytes, size, record
} = require('../helpers');

module.exports = () => {
    record('QUST', 'Quest', {
        members: [
            def('EDID'),
            def('SCRI'),
            def('FULL'),
            def('ICON'),
            req(subrecord('DATA', struct('General', [
                format(uint8('Flags'), flags({
                    0: 'Start game enabled',
                    1: '',
                    2: 'Allow repeated conversation topics',
                    3: 'Allow repeated stages'
                })),
                uint8('Priority')
            ]))),
            def('CTDAs'),
            sorted(memberArray('Stages', 
                sortKey([0], memberStruct('Stage', [
                    subrecord('INDX', int16('Stage index')),
                    memberArray('Log Entries', 
                        memberStruct('Log Entry', [
                            subrecord('QSDT', format(uint8('Stage Flags'), flags({
                                0: 'Complete quest'
                            }))),
                            def('CTDAs'),
                            opts(subrecord('CNAM', conflictType('Translate', string('Log Entry'))), {
                                "transform": "keepcase"
                            }),
                            def('ResultScript')
                        ])
                    )
                ]))
            )),
            memberArray('Targets', 
                memberStruct('Target', [
                    subrecord('QSTA', struct('Target', [
                        opts(ckFormId('Target', [
                            'REFR', 'ACRE', 'ACHR'
                        ]), {
                            "persistent": true
                        }),
                        format(uint8('Flags'), flags({
                            0: 'Compass marker ignores locks'
                        })),
                        size(3, bytes('Unused'))
                    ])),
                    def('CTDAs')
                ])
            )
        ]
    })
};