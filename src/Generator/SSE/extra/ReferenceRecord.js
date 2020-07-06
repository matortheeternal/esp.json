let {
    flags, showUnknown, def, subrecord, ckFormId,
    float, uint32, format, sortKey, struct,
    sorted, memberArray, uint8, memberStruct, empty,
    array, addDef
} = require('../../helpers');

module.exports = () => {
    addDef('ReferenceRecord', {
        type: 'record',
        flags: showUnknown(flags({
            5: 'Deleted',
            7: 'Turn Off Fire',
            10: 'Persistent',
            11: 'Initially Disabled',
            12: 'Ignored',
            28: 'Reflected By Auto Water',
            29: 'Don\'t Havok Settle',
            30: 'No Respawn'
        })),
        members: [
            def('EDID'),
            def('VMAD'),
            subrecord('NAME', ckFormId('Projectile', ['PROJ', 'HAZD'])),
            subrecord('XEZN', ckFormId('Encounter Zone', ['ECZN'])),
            def('Ownership'),
            subrecord('XHTW', float('Head-Tracking Weight')),
            subrecord('XFVC', float('Favor Cost')),
            sorted(memberArray('Reflected/Refracted By',
                subrecord('XPWR', sortKey([0], struct('Water', [
                    ckFormId('Reference', ['REFR']),
                    format(uint32('Type'), flags({
                        0: 'Reflection',
                        1: 'Refraction'
                    }))
                ])))
            )),
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
            def('XESP'),
            subrecord('XEMI', ckFormId('Emittance', ['LIGH', 'REGN'])),
            subrecord('XMBR', ckFormId('MultiBound Reference', ['REFR'])),
            subrecord('XIS2', empty('Ignored by Sandbox')),
            subrecord('XLRT', array('Location Ref Type',
                ckFormId('Ref', ['LCRT', 'NULL'])
            )),
            subrecord('XLRL', ckFormId('Location Reference', [
                'LCRT', 'LCTN', 'NULL'
            ])),
            def('XLOD'),
            def('XSCL'),
            def('DataPosRot')
        ]
    });
};
