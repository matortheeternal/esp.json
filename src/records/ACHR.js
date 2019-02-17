let {
    generateRecordDef,
    req, subrecord, subrecordArray, multiStruct,
    int32, float, ckFormId, empty, flags8
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

    generateRecordDef('ACHR', game, {
        name: 'Placed NPC',
        additionalElements: ['Cell'],
        flags: {
            9: 'Starts Dead',           // 0x00000200
            10: 'Persistent',           // 0x00000400
            11: 'Initially Disabled',   // 0x00000800
            25: 'No AI Acquire',        // 0x02000000
            29: 'Don\'t Havok Settle'   // 0x20000000
        },
        elements: [
            subrecord('EDID'),
            subrecord('VMAD'),
            req(subrecord('NAME', ckFormId('Base', ['NPC_']))),
            subrecord('XEZN', ckFormId('Encounter Zone', ['ECZN'])),
            subrecord('XRGD'),
            subrecord('XRGB'),
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
                subrecordArray('Topic', 'PDTOs'),
                subrecord('TNAM', ckFormId('Topic', ['DIAL', 'NULL']))
            ]),
            subrecord('XLCM'), // Leveled Actor
            req(subrecord('XMRC', ckFormId('Merchant Container', ['REFR']))),
            subrecord('XCNT', int32('Count')),
            subrecord('XRDS', float('Radius')),
            subrecord('XHLP', float('Health')),
            subrecordArray('Linked References',
                subrecord('XLKR', struct('Linked Reference', [
                    ckFormId('Keyword/Ref', keywordRefSigs),
                    ckFormId('Ref', refSigs)
                ])), [0] // TODO: should probably be [0,1]?
            ),
            multiStruct('Activate Parents', [
                req(subrecord('XAPD', flags8('Flags', [
                    'Parent Activate Only'
                ]))),
                subrecordArray('Activate Parent Refs',
                    subrecord('XAPR', struct('Activate Parent Ref', [
                        ckFormId('Reference', refSigs),
                        float('Delay')
                    ])), [0]
                )
            ]),
            subrecord('XCLP', struct('Linked Reference Color', [
                struct('Link Start Color', 'ByteColors'),
                struct('Link End Color', 'ByteColors')
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
            subrecord('XESP'),
            multiStruct('Ownership'),
            subrecord('XEMI', ckFormId('Emittance', ['LIGH', 'REGN'])),
            subrecord('XMBR', ckFormId('MultiBound Reference', mbRefSigs)),
            subrecord('XIBS', empty('Ignored By Sandbox')),
            subrecord('XSCL'),
            subrecord('DATA', 'Position/Rotation')
        ]
    });
};