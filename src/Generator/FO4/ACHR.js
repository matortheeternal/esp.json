let {
    flags, showUnknown, def, ckFormId, subrecord, 
    req, float, empty, memberStruct, int32, 
    uint32, sortKey, struct, sorted, memberArray, 
    uint8, format, conflictType, array, unknown, 
    string, record
} = require('../helpers');

module.exports = () => {
    record('ACHR', 'Placed NPC', {
        flags: showUnknown(flags({
            5: 'Deleted',
            9: 'Starts Dead',
            10: 'Persistent',
            11: 'Initially Disabled',
            12: 'Ignored',
            13: 'Starts Unconscious',
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
                def('PDTOs'),
                subrecord('TNAM', ckFormId('Topic', ['DIAL', 'NULL']))
            ]),
            def('XLCM'),
            subrecord('XCNT', int32('Count')),
            subrecord('XRDS', float('Radius')),
            subrecord('XHLT', uint32('Health %')),
            sorted(memberArray('Linked References', 
                subrecord('XLKR', sortKey([0], struct('Linked Reference', [
                    ckFormId('Keyword/Ref', [
                        'KYWD', 'PLYR', 'ACHR', 'REFR', 'PGRE',
                        'PHZD', 'PMIS', 'PARW', 'PBAR', 'PBEA',
                        'PCON', 'PFLA', 'NULL'
                    ]),
                    ckFormId('Ref', def('sigReferences'))
                ])))
            )),
            memberStruct('Activate Parents', [
                subrecord('XAPD', format(uint8('Flags'), flags({
                    0: 'Parent Activate Only'
                }))),
                sorted(memberArray('Activate Parent Refs', 
                    subrecord('XAPR', sortKey([0], struct('Activate Parent Ref', [
                        ckFormId('Reference', def('sigReferences')),
                        float('Delay')
                    ])))
                ))
            ]),
            subrecord('XATP', empty('Activation Point')),
            subrecord('XLKT', empty('Linked Ref Transient')),
            subrecord('XRFG', ckFormId('Reference Group', ['RFGP'])),
            subrecord('XLYR', ckFormId('Layer', ['LAYR'])),
            subrecord('XMSP', ckFormId('Material Swap', ['MSWP'])),
            subrecord('XLCN', ckFormId('Persistent Location', ['LCTN'])),
            subrecord('XLRL', conflictType('BenignIfAdded', ckFormId('Location Reference', [
                'LCRT', 'LCTN', 'NULL'
            ]))),
            subrecord('XLRT', array('Location Ref Type', 
                ckFormId('Ref', ['LCRT', 'NULL'])
            )),
            subrecord('XIS2', empty('Ignored by Sandbox')),
            memberArray('Spline Connection', 
                subrecord('XPLK', struct('Link', [
                    ckFormId('Ref', ['REFR', 'ACHR']),
                    unknown()
                ]))
            ),
            subrecord('XHTW', float('Head-Tracking Weight')),
            subrecord('XFVC', float('Favor Cost')),
            def('XESP'),
            def('XOWN'),
            def('XRNK'),
            subrecord('XEMI', ckFormId('Emittance', ['LIGH', 'REGN'])),
            subrecord('XMBR', ckFormId('MultiBound Reference', def('sigReferences'))),
            subrecord('XIBS', empty('Ignored By Sandbox')),
            def('XSCL'),
            def('DATAPosRot'),
            subrecord('MNAM', string('Comments'))
        ]
    })
};