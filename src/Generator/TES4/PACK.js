let {
    def, uint16, format, uint8, bytes, 
    size, struct, uint32, union, subrecord, 
    enumeration, int32, ckFormId, opts, int8, 
    record
} = require('../helpers');

module.exports = () => {
    record('PACK', 'AI Package', {
        members: [
            def('EDID'),
            subrecord('PKDT', union('General', 'PACKPKDTDecider', [
                struct('General', [
                    format(uint16('Flags'), def('PKDTFlags')),
                    format(uint8('Type'), def('PKDTType')),
                    size(1, bytes('Unused'))
                ]),
                struct('General', [
                    format(uint32('Flags'), def('PKDTFlags')),
                    format(uint8('Type'), def('PKDTType')),
                    size(3, bytes('Unused'))
                ])
            ])),
            subrecord('PLDT', struct('Location', [
                format(int32('Type'), enumeration({
                    0: 'Near reference',
                    1: 'In cell',
                    2: 'Near current location',
                    3: 'Near editor location',
                    4: 'Object ID',
                    5: 'Object type'
                })),
                union('Location', 'PxDTLocationDecider', [
                    opts(ckFormId('Reference', [
                        'REFR', 'ACHR', 'ACRE', 'PLYR'
                    ]), {
                        "persistent": true
                    }),
                    ckFormId('Cell', ['CELL']),
                    ckFormId('Unused', ['NULL']),
                    ckFormId('Unused', ['NULL']),
                    ckFormId('Object ID', [
                        'ACTI', 'DOOR', 'FLOR', 'STAT', 'FURN',
                        'CREA', 'SPEL', 'NPC_', 'CONT', 'ARMO',
                        'AMMO', 'MISC', 'WEAP', 'INGR', 'SLGM',
                        'SGST', 'BOOK', 'KEYM', 'CLOT', 'ALCH',
                        'APPA', 'LIGH'
                    ]),
                    uint32('Object type')
                ]),
                int32('Radius')
            ])),
            subrecord('PSDT', struct('Schedule', [
                int8('Month'),
                format(int8('Day of week'), enumeration({
                    0: 'Sundas',
                    1: 'Morndas',
                    2: 'Tirdas',
                    3: 'Middas',
                    4: 'Turdas',
                    5: 'Fredas',
                    6: 'Loredas',
                    7: 'Morndas to Fredas',
                    8: 'Loredas, Sundas',
                    9: 'Morndas, Middas, Fredas',
                    10: 'Tirdas, Turdas',
                    "-1": 'Any'
                })),
                uint8('Date'),
                int8('Time'),
                int32('Duration')
            ])),
            subrecord('PTDT', struct('Target', [
                format(int32('Type'), enumeration({
                    0: 'Specific reference',
                    1: 'Object ID',
                    2: 'Object type'
                })),
                union('Target', 'PxDTLocationDecider', [
                    opts(ckFormId('Reference', [
                        'ACHR', 'ACRE', 'REFR', 'PLYR'
                    ]), {
                        "persistent": true
                    }),
                    ckFormId('Object ID', [
                        'ACTI', 'DOOR', 'FLOR', 'STAT', 'FURN',
                        'CREA', 'SPEL', 'NPC_', 'CONT', 'ARMO',
                        'AMMO', 'MISC', 'WEAP', 'INGR', 'SLGM',
                        'SGST', 'BOOK', 'KEYM', 'CLOT', 'ALCH',
                        'APPA', 'LIGH'
                    ]),
                    uint32('Object type')
                ]),
                int32('Count')
            ])),
            def('CTDAs')
        ]
    })
};