let {
    def, ckFormId, subrecord, req, float, 
    empty, memberStruct, opts, int32, unknown, 
    sortKey, struct, sorted, memberArray, uint8, 
    bytes, size, flags, format, record
} = require('../helpers');

module.exports = () => {
    record('ACHR', 'Placed NPC', {
        members: [
            def('EDID'),
            req(subrecord('NAME', ckFormId('Base', ['NPC_']))),
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
            opts(subrecord('XMRC', ckFormId('Merchant Container', ['REFR'])), {
                "persistent": true
            }),
            subrecord('XCNT', int32('Count')),
            subrecord('XRDS', float('Radius')),
            subrecord('XHLP', float('Health')),
            sorted(memberArray('Linked Decals', 
                subrecord('XDCR', sortKey([0], struct('Decal', [
                    ckFormId('Reference', ['REFR']),
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
            def('XESP'),
            subrecord('XEMI', ckFormId('Emittance', ['LIGH', 'REGN'])),
            subrecord('XMBR', ckFormId('MultiBound Reference', ['REFR'])),
            subrecord('XIBS', empty('Ignored By Sandbox')),
            def('XSCL'),
            def('DATAPosRot')
        ]
    })
};