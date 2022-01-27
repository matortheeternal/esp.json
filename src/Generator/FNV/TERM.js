let {
    req, def, ckFormId, subrecord, enumeration, 
    uint8, format, flags, bytes, size, 
    struct, string, conflictType, opts, memberStruct, 
    memberArray, record
} = require('../helpers');

module.exports = () => {
    record('TERM', 'Terminal', {
        members: [
            req(def('EDID')),
            req(def('OBND')),
            def('FULL'),
            def('MODL'),
            def('SCRI'),
            def('DEST'),
            req(def('DESC')),
            subrecord('SNAM', ckFormId('Sound - Looping', ['SOUN'])),
            subrecord('PNAM', ckFormId('Password Note', ['NOTE'])),
            req(subrecord('DNAM', struct('', [
                format(uint8('Base Hacking Difficulty'), enumeration({
                    0: 'Very Easy',
                    1: 'Easy',
                    2: 'Average',
                    3: 'Hard',
                    4: 'Very Hard',
                    5: 'Requires Key'
                })),
                format(uint8('Flags'), flags({
                    0: 'Leveled',
                    1: 'Unlocked',
                    2: 'Alternate Colors',
                    3: 'Hide Welcome Text when displaying Image'
                })),
                format(uint8('ServerType'), enumeration({
                    0: '-Server 1-',
                    1: '-Server 2-',
                    2: '-Server 3-',
                    3: '-Server 4-',
                    4: '-Server 5-',
                    5: '-Server 6-',
                    6: '-Server 7-',
                    7: '-Server 8-',
                    8: '-Server 9-',
                    9: '-Server 10-'
                })),
                size(1, bytes('Unused'))
            ]))),
            memberArray('Menu Items', 
                memberStruct('Menu Item', [
                    opts(subrecord('ITXT', conflictType('Translate', string('Item Text'))), {
                        "transform": "keepcase"
                    }),
                    opts(req(subrecord('RNAM', conflictType('Translate', string('Result Text')))), {
                        "transform": "keepcase"
                    }),
                    req(subrecord('ANAM', format(uint8('Flags'), flags({
                        0: 'Add Note',
                        1: 'Force Redraw'
                    })))),
                    subrecord('INAM', ckFormId('Display Note', ['NOTE'])),
                    subrecord('TNAM', ckFormId('Sub Menu', ['TERM'])),
                    req(def('EmbeddedScript')),
                    def('CTDAs')
                ])
            )
        ]
    })
};