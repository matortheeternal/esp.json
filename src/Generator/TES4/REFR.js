let {
    def, ckFormId, subrecord, req, opts, 
    struct, uint8, bytes, size, empty, 
    union, flags, format, int32, memberStruct, 
    conflictType, float, string, uint32, enumeration, 
    record
} = require('../helpers');

module.exports = () => {
    record('REFR', 'Placed Object', {
        members: [
            def('EDID'),
            req(subrecord('NAME', ckFormId('Base', [
                'TREE', 'SBSP', 'LVLC', 'SOUN', 'ACTI',
                'DOOR', 'FLOR', 'STAT', 'FURN', 'CONT',
                'ARMO', 'AMMO', 'MISC', 'WEAP', 'INGR',
                'SLGM', 'SGST', 'BOOK', 'KEYM', 'CLOT',
                'ALCH', 'APPA', 'LIGH', 'GRAS'
            ]))),
            subrecord('XTEL', struct('Teleport Destination', [
                opts(ckFormId('Door', ['REFR']), {
                    "persistent": true
                }),
                def('PosRot')
            ])),
            subrecord('XLOC', struct('Lock information', [
                uint8('Lock Level'),
                size(3, bytes('Unused')),
                ckFormId('Key', ['KEYM', 'NULL']),
                union('Unused', 'XLOCFillerDecider', [
                    empty('Unused'),
                    size(4, bytes('Unused'))
                ]),
                format(uint8('Flags'), flags({
                    0: '',
                    1: '',
                    2: 'Leveled Lock'
                })),
                size(3, bytes('Unused'))
            ])),
            memberStruct('Ownership', [
                def('XOWN'),
                subrecord('XRNK', int32('Faction rank')),
                def('XGLB')
            ]),
            def('XESP'),
            opts(subrecord('XTRG', ckFormId('Target', [
                'REFR', 'ACHR', 'ACRE'
            ])), {
                "persistent": true
            }),
            subrecord('XSED', struct('SpeedTree', [
                uint8('Seed'),
                union('Unused', 'REFRXSEDDecider', [
                    conflictType('Ignore', empty('Unused')),
                    conflictType('Ignore', size(3, bytes('Unused')))
                ])
            ])),
            def('XLOD'),
            subrecord('XCHG', float('Charge')),
            subrecord('XHLT', int32('Health')),
            memberStruct('Unused', [
                subrecord('XPCI', ckFormId('Unused', ['CELL'])),
                subrecord('FULL', string('Unused'))
            ]),
            subrecord('XLCM', int32('Level Modifier')),
            subrecord('XRTM', ckFormId('Unknown', ['REFR'])),
            subrecord('XACT', format(uint32('Action Flag'), flags({
                0: 'Use Default',
                1: 'Activate',
                2: 'Open',
                3: 'Open by Default'
            }))),
            subrecord('XCNT', int32('Count')),
            memberStruct('Map Marker', [
                subrecord('XMRK', empty('Map Marker Data')),
                req(subrecord('FNAM', format(uint8('Map Flags'), flags({
                    0: 'Visible',
                    1: 'Can Travel To'
                })))),
                req(def('FULL')),
                req(subrecord('TNAM', struct('', [
                    format(uint8('Type'), enumeration({
                        0: 'None',
                        1: 'Camp',
                        2: 'Cave',
                        3: 'City',
                        4: 'Elven Ruin',
                        5: 'Fort Ruin',
                        6: 'Mine',
                        7: 'Landmark',
                        8: 'Tavern',
                        9: 'Settlement',
                        10: 'Daedric Shrine',
                        11: 'Oblivion Gate',
                        12: 'Unknown? (door icon)'
                    })),
                    size(1, bytes('Unused'))
                ])))
            ]),
            subrecord('ONAM', empty('Open by Default')),
            def('XRGD'),
            def('XSCL'),
            subrecord('XSOL', format(uint8('Contained Soul'), def('SoulGemEnum'))),
            def('DATAPosRot')
        ]
    })
};