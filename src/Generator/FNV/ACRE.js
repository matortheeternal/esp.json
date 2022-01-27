let {
    def, ckFormId, subrecord, req, float, 
    empty, memberStruct, int32, opts, unknown, 
    sortKey, struct, sorted, memberArray, uint8, 
    bytes, size, flags, format, string, 
    record
} = require('../helpers');

module.exports = () => {
    record('ACRE', 'Placed Creature', {
        members: [
            def('EDID'),
            req(subrecord('NAME', ckFormId('Base', ['CREA']))),
            subrecord('XEZN', ckFormId('Encounter Zone', ['ECZN'])),
            def('XRGD'),
            def('XRGB'),
            memberStruct('Patrol Data', [
                req(subrecord('XPRD', float('Idle Time'))),
                req(subrecord('XPPA', empty('Patrol Script Marker'))),
                req(subrecord('INAM', ckFormId('Idle', ['IDLE', 'NULL']))),
                req(def('EmbeddedScript')),
                req(subrecord('TNAM', ckFormId('Topic', ['DIAL', 'NULL'])))
            ]),
            def('XLCM'),
            memberStruct('Ownership', [
                def('XOWN'),
                subrecord('XRNK', int32('Faction rank'))
            ]),
            opts(subrecord('XMRC', ckFormId('Merchant Container', ['REFR'])), {
                "persistent": true
            }),
            subrecord('XCNT', int32('Count')),
            subrecord('XRDS', float('Radius')),
            subrecord('XHLP', float('Health')),
            sorted(memberArray('Linked Decals', 
                subrecord('XDCR', sortKey([0], struct('Decal', [
                    ckFormId('Reference', [
                        'REFR', 'ACRE', 'ACHR', 'PGRE', 'PMIS',
                        'PBEA'
                    ]),
                    unknown()
                ])))
            )),
            subrecord('XLKR', ckFormId('Linked Reference', [
                'REFR', 'ACRE', 'ACHR', 'PGRE', 'PMIS',
                'PBEA', 'PLYR'
            ])),
            subrecord('XCLP', struct('Linked Reference Color', [
                struct('Link Start Color', [
                    uint8('Red'),
                    uint8('Green'),
                    uint8('Blue'),
                    size(1, bytes('Unused'))
                ]),
                struct('Link End Color', [
                    uint8('Red'),
                    uint8('Green'),
                    uint8('Blue'),
                    size(1, bytes('Unused'))
                ])
            ])),
            memberStruct('Activate Parents', [
                subrecord('XAPD', format(uint8('Flags'), flags({
                    0: 'Parent Activate Only'
                }))),
                sorted(memberArray('Activate Parent Refs', 
                    subrecord('XAPR', sortKey([0], struct('Activate Parent Ref', [
                        ckFormId('Reference', [
                            'REFR', 'ACRE', 'ACHR', 'PGRE', 'PMIS',
                            'PBEA', 'PLYR'
                        ]),
                        float('Delay')
                    ])))
                ))
            ]),
            opts(subrecord('XATO', string('Activation Prompt')), {
                "transform": "keepcase"
            }),
            def('XESP'),
            subrecord('XEMI', ckFormId('Emittance', ['LIGH', 'REGN'])),
            subrecord('XMBR', ckFormId('MultiBound Reference', ['REFR'])),
            subrecord('XIBS', empty('Ignored By Sandbox')),
            def('XSCL'),
            def('DATAPosRot')
        ]
    })
};