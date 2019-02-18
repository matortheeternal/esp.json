let {
    addDef, record, def, namedDef,
    req, subrecord, arrayOfSubrecord, multiStruct, struct, array,
    int32, float, ckFormId, empty, unknown, flags8
} = require('../helpers');

let supportedGames = ['TES5', 'SSE'];

module.exports = game => {
    if (!supportedGames.includes(game))
        throw new Error(`ACHR record definition not available for ${game}`);

    let keywordRefSigs = [
        'KYWD', 'PLYR', 'ACHR', 'REFR', 'PGRE', 'PHZD', 'PMIS',
        'PARW', 'PBAR', 'PBEA', 'PCON', 'PFLA', 'NULL'
    ];

    let refSigs = [
        'PLYR', 'ACHR', 'REFR', 'PGRE', 'PHZD', 'PMIS',
        'PARW', 'PBAR', 'PBEA', 'PCON', 'PFLA'
    ];

    let locRefSigs = ['LCRT', 'LCTN', 'NULL'];

    let mbRefSigs = [
        'REFR', 'PGRE', 'PHZD', 'PMIS', 'PARW',
        'PBAR', 'PBEA', 'PCON', 'PFLA'
    ];

    addDef('ACHR', record('ACHR', 'Placed NPC', {
        additionalElements: ['Cell'],
        flags: {
            9: 'Starts Dead',           // 0x00000200
            10: 'Persistent',           // 0x00000400
            11: 'Initially Disabled',   // 0x00000800
            25: 'No AI Acquire',        // 0x02000000
            29: 'Don\'t Havok Settle'   // 0x20000000
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
                    subrecord('SCRO', unknown())
                ]),
                arrayOfSubrecord('Topic', 'PDTOs'),
                subrecord('TNAM', ckFormId('Topic', ['DIAL', 'NULL']))
            ]),
            def('XLCM'),
            req(subrecord('XMRC', ckFormId('Merchant Container', ['REFR']))),
            subrecord('XCNT', int32('Count')),
            subrecord('XRDS', float('Radius')),
            subrecord('XHLP', float('Health')),
            arrayOfSubrecord('Linked References', [0],
                subrecord('XLKR', struct('Linked Reference', [
                    ckFormId('Keyword/Ref', keywordRefSigs),
                    ckFormId('Ref', refSigs)
                ]))
            ),
            multiStruct('Activate Parents', [
                req(subrecord('XAPD', flags8('Flags', [
                    'Parent Activate Only'
                ]))),
                arrayOfSubrecord('Activate Parent Refs', [0],
                    subrecord('XAPR', struct('Activate Parent Ref', [
                        ckFormId('Reference', refSigs),
                        float('Delay')
                    ]))
                )
            ]),
            subrecord('XCLP', struct('Linked Reference Color', [
                namedDef('Link Start Color', 'ByteColors'),
                namedDef('Link End Color', 'ByteColors')
            ])),
            subrecord('XLCN', ckFormId('Persistent Location', ['LCTN'])),
            subrecord('XLRL', ckFormId('Location Reference', locRefSigs)),
            subrecord('XIS2', empty('Ignored by Sandbox')),
            subrecord('XLRT', array('Location Ref Type',
                ckFormId('Ref', ['LCRT', 'NULL'])
            )),
            subrecord('XHOR', ckFormId('Horse', ['ACHR'])),
            subrecord('XHTW', float('Head-Tracking Weight')),
            subrecord('XFVC', float('Favor Cost')),
            def('XESP'),
            def('Ownership'),
            subrecord('XEMI', ckFormId('Emittance', ['LIGH', 'REGN'])),
            subrecord('XMBR', ckFormId('MultiBound Reference', mbRefSigs)),
            subrecord('XIBS', empty('Ignored By Sandbox')),
            def('XSCL'),
            def('DATAPosRot')
        ]
    }));
};