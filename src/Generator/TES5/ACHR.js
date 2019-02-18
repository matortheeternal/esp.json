let {
    addDef, record, def, subrecord, ckFormId, 
    req, multiStruct, float, empty, unknown, 
    int32, arrayOfSubrecord, sortKey, struct, flags8, 
    namedDef, array
} = require('../helpers');

module.exports = game => {
    addDef(record('ACHR', 'Placed NPC', {
        flags: {
            9: 'Starts Dead',                               // 0x00000200
            10: 'Persistent',                               // 0x00000400
            11: 'Initially Disabled',                       // 0x00000800
            25: 'No AI Acquire',                            // 0x02000000
            29: 'Don\'t Havok Settle',                      // 0x20000000
        },
        elements: [
            def('EDID'),
            def('VMAD'),
            req(subrecord('NAME', ckFormId('Base', ['NPC_']))),
            subrecord('XEZN', ckFormId('Encounter Zone', ['ECZN'])),
            def('XRGD'),
            def('XRGB'),
            multiStruct('Patrol Data', [
                req(subrecord('XPRD', float('Idle Time'))),
                req(subrecord('XPPA', empty('Patrol Script Marker'))),
                req(subrecord('INAM', ckFormId('Idle', ['IDLE', 'NULL']))),
                multiStruct('Unused', [
                    subrecord('SCHR', unknown()),
                    subrecord('SCDA', unknown()),
                    subrecord('SCTX', unknown()),
                    subrecord('QNAM', unknown()),
                    subrecord('SCRO', unknown()),
                ]),
                def('PDTOs'),
                subrecord('TNAM', ckFormId('Topic', ['DIAL', 'NULL'])),
            ]),
            def('XLCM'),
            subrecord('XMRC', ckFormId('Merchant Container', ['REFR'])),
            subrecord('XCNT', int32('Count')),
            subrecord('XRDS', float('Radius')),
            subrecord('XHLP', float('Health')),
            arrayOfSubrecord('Linked References', 
                subrecord('XLKR', sortKey([0], struct('Linked Reference', [
                    ckFormId('Keyword/Ref', ['KYWD', 'PLYR', 'ACHR', 'REFR', 'PGRE', 'PHZD', 'PMIS', 'PARW', 'PBAR', 'PBEA', 'PCON', 'PFLA', 'NULL']),
                    ckFormId('Ref', ['PLYR', 'ACHR', 'REFR', 'PGRE', 'PHZD', 'PMIS', 'PARW', 'PBAR', 'PBEA', 'PCON', 'PFLA']),
                ]))),
            ),
            multiStruct('Activate Parents', [
                subrecord('XAPD', flags8('Flags', [
                    'Parent Activate Only',
                ])),
                arrayOfSubrecord('Activate Parent Refs', 
                    subrecord('XAPR', sortKey([0], struct('Activate Parent Ref', [
                        ckFormId('Reference', ['PLYR', 'ACHR', 'REFR', 'PGRE', 'PHZD', 'PMIS', 'PARW', 'PBAR', 'PBEA', 'PCON', 'PFLA']),
                        float('Delay'),
                    ]))),
                ),
            ]),
            subrecord('XCLP', struct('Linked Reference Color', [
                namedDef('Link Start Color', 'ByteColors'),
                namedDef('Link End Color', 'ByteColors'),
            ])),
            subrecord('XLCN', ckFormId('Persistent Location', ['LCTN'])),
            subrecord('XLRL', ckFormId('Location Reference', ['LCRT', 'LCTN', 'NULL'])),
            subrecord('XIS2', empty('Ignored by Sandbox')),
            subrecord('XLRT', array('Location Ref Type',
                ckFormId('Ref', ['LCRT', 'NULL']),
            )),
            subrecord('XHOR', ckFormId('Horse', ['ACHR'])),
            subrecord('XHTW', float('Head-Tracking Weight')),
            subrecord('XFVC', float('Favor Cost')),
            def('XESP'),
            def('Ownership'),
            subrecord('XEMI', ckFormId('Emittance', ['LIGH', 'REGN'])),
            subrecord('XMBR', ckFormId('MultiBound Reference', ['REFR', 'PGRE', 'PHZD', 'PMIS', 'PARW', 'PBAR', 'PBEA', 'PCON', 'PFLA'])),
            subrecord('XIBS', empty('Ignored By Sandbox')),
            def('XSCL'),
            def('DATAPosRot'),
        ]
    }));
};