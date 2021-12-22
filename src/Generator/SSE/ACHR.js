let {
    flags, showUnknown, def, ckFormId, subrecord, 
    req, float, empty, unknown, memberStruct, 
    conflictType, opts, int32, sortKey, struct, 
    sorted, memberArray, uint8, format, array, 
    record
} = require('../helpers');

module.exports = () => {
    record('ACHR', 'Placed NPC', {
        flags: showUnknown(flags({
            5: 'Deleted',
            9: 'Starts Dead',
            10: 'Persistent',
            11: 'Initially Disabled',
            12: 'Ignored',
            25: 'No AI Acquire',
            29: 'Don\'t Havok Settle'
        })),
        members: [
            def('EDID'),
            def('VMAD'),
            req(subrecord('NAME', ckFormId('Base', ['NPC_']))),
            subrecord('XEZN', ckFormId('Encounter Zone', ['ECZN'])),
            def('XRGD'),
            def('XRGB'),
            memberStruct('Patrol Data', [
                req(subrecord('XPRD', float('Idle Time'))),
                req(subrecord('XPPA', empty('Patrol Script Marker'))),
                req(subrecord('INAM', ckFormId('Idle', ['IDLE', 'NULL']))),
                conflictType('Ignore', memberStruct('Unused', [
                    subrecord('SCHR', unknown()),
                    subrecord('SCDA', unknown()),
                    subrecord('SCTX', unknown()),
                    subrecord('QNAM', unknown()),
                    subrecord('SCRO', unknown())
                ])),
                def('PDTOs'),
                subrecord('TNAM', ckFormId('Topic', ['DIAL', 'NULL']))
            ]),
            def('XLCM'),
            opts(subrecord('XMRC', ckFormId('Merchant Container', ['REFR'])), {
                "persistent": true
            }),
            subrecord('XCNT', int32('Count')),
            subrecord('XRDS', float('Radius')),
            subrecord('XHLP', float('Health')),
            sorted(memberArray('Linked References', 
                subrecord('XLKR', sortKey([0], struct('Linked Reference', [
                    ckFormId('Keyword/Ref', [
                        'KYWD', 'PLYR', 'ACHR', 'REFR', 'PGRE',
                        'PHZD', 'PMIS', 'PARW', 'PBAR', 'PBEA',
                        'PCON', 'PFLA', 'NULL'
                    ]),
                    ckFormId('Ref', [
                        'PLYR', 'ACHR', 'REFR', 'PGRE', 'PHZD',
                        'PMIS', 'PARW', 'PBAR', 'PBEA', 'PCON',
                        'PFLA'
                    ])
                ])))
            )),
            memberStruct('Activate Parents', [
                subrecord('XAPD', format(uint8('Flags'), flags({
                    0: 'Parent Activate Only'
                }))),
                sorted(memberArray('Activate Parent Refs', 
                    subrecord('XAPR', sortKey([0], struct('Activate Parent Ref', [
                        ckFormId('Reference', [
                            'PLYR', 'ACHR', 'REFR', 'PGRE', 'PHZD',
                            'PMIS', 'PARW', 'PBAR', 'PBEA', 'PCON',
                            'PFLA'
                        ]),
                        float('Delay')
                    ])))
                ))
            ]),
            subrecord('XCLP', struct('Linked Reference Color', [
                def('ByteColors', { name: 'Link Start Color' }),
                def('ByteColors', { name: 'Link End Color' })
            ])),
            subrecord('XLCN', ckFormId('Persistent Location', ['LCTN'])),
            subrecord('XLRL', conflictType('BenignIfAdded', ckFormId('Location Reference', [
                'LCRT', 'LCTN', 'NULL'
            ]))),
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
            subrecord('XMBR', ckFormId('MultiBound Reference', [
                'REFR', 'PGRE', 'PHZD', 'PMIS', 'PARW',
                'PBAR', 'PBEA', 'PCON', 'PFLA'
            ])),
            subrecord('XIBS', empty('Ignored By Sandbox')),
            def('XSCL'),
            def('DATAPosRot')
        ]
    })
};