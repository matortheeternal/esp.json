let {
    def, bytes, size, conflictType, subrecord, 
    ckFormId, req, float, scale, struct, 
    enumeration, uint32, format, empty, opts, 
    flags, uint8, memberStruct, unknown, int32, 
    sortKey, sorted, memberArray, string, int16, 
    array, count, uint16, record
} = require('../helpers');

module.exports = () => {
    record('REFR', 'Placed Object', {
        members: [
            def('EDID'),
            subrecord('RCLR', conflictType('Ignore', size(0, bytes('Unused')))),
            req(subrecord('NAME', ckFormId('Base', [
                'TREE', 'SOUN', 'ACTI', 'DOOR', 'STAT',
                'FURN', 'CONT', 'ARMO', 'AMMO', 'LVLN',
                'LVLC', 'MISC', 'WEAP', 'BOOK', 'KEYM',
                'ALCH', 'LIGH', 'GRAS', 'ASPC', 'IDLM',
                'ARMA', 'CHIP', 'MSTT', 'NOTE', 'PWAT',
                'SCOL', 'TACT', 'TERM', 'TXST', 'CCRD',
                'IMOD', 'CMNY'
            ]))),
            subrecord('XEZN', ckFormId('Encounter Zone', ['ECZN'])),
            def('XRGD'),
            def('XRGB'),
            subrecord('XPRM', struct('Primitive', [
                struct('Bounds', [
                    req(scale(2, float('X'))),
                    req(scale(2, float('Y'))),
                    req(scale(2, float('Z')))
                ]),
                struct('Color', [
                    scale(255, float('Red')),
                    scale(255, float('Green')),
                    scale(255, float('Blue'))
                ]),
                float('Unknown'),
                format(uint32('Type'), enumeration({
                    0: 'None',
                    1: 'Box',
                    2: 'Sphere',
                    3: 'Portal Box'
                }))
            ])),
            subrecord('XTRI', format(uint32('Collision Layer'), enumeration({
                0: 'Unidentified',
                1: 'Static',
                2: 'AnimStatic',
                3: 'Transparent',
                4: 'Clutter',
                5: 'Weapon',
                6: 'Projectile',
                7: 'Spell',
                8: 'Biped',
                9: 'Trees',
                10: 'Props',
                11: 'Water',
                12: 'Trigger',
                13: 'Terrain',
                14: 'Trap',
                15: 'Non Collidable',
                16: 'Cloud Trap',
                17: 'Ground',
                18: 'Portal',
                19: 'Debris Small',
                20: 'Debris Large',
                21: 'Acustic Space',
                22: 'Actor Zone',
                23: 'Projectile Zone',
                24: 'Gas Trap',
                25: 'Shell Casing',
                26: 'Transparent Small',
                27: 'Invisible Wall',
                28: 'Transparent Small Anim',
                29: 'Dead Bip',
                30: 'Char Controller',
                31: 'Avoid Box',
                32: 'Collision Box',
                33: 'Camera Sphere',
                34: 'Door Detection',
                35: 'Camera Pick',
                36: 'Item Pick',
                37: 'Line Of Sight',
                38: 'Path Pick',
                39: 'Custom Pick 1',
                40: 'Custom Pick 2',
                41: 'Spell Explosion',
                42: 'Dropping Pick'
            }))),
            subrecord('XMBP', empty('MultiBound Primitive Marker')),
            subrecord('XMBO', struct('Bound Half Extents', [
                float('X'),
                float('Y'),
                float('Z')
            ])),
            subrecord('XTEL', struct('Teleport Destination', [
                opts(ckFormId('Door', ['REFR']), {
                    "persistent": true
                }),
                def('PosRot'),
                format(uint32('Flags'), flags({
                    0: 'No Alarm'
                }))
            ])),
            memberStruct('Map Marker', [
                subrecord('XMRK', empty('Map Marker Data')),
                req(subrecord('FNAM', format(uint8('Flags'), flags({
                    0: 'Visible',
                    1: 'Can Travel To',
                    2: '"Show All" Hidden'
                })))),
                req(def('FULL')),
                req(subrecord('TNAM', struct('', [
                    format(uint8('Type'), enumeration({
                        0: 'None',
                        1: 'City',
                        2: 'Settlement',
                        3: 'Encampment',
                        4: 'Natural Landmark',
                        5: 'Cave',
                        6: 'Factory',
                        7: 'Monument',
                        8: 'Military',
                        9: 'Office',
                        10: 'Town Ruins',
                        11: 'Urban Ruins',
                        12: 'Sewer Ruins',
                        13: 'Metro',
                        14: 'Vault'
                    })),
                    size(1, bytes('Unused'))
                ]))),
                subrecord('WMI1', ckFormId('Reputation', ['REPU']))
            ]),
            memberStruct('Audio Data', [
                subrecord('MMRK', empty('Audio Marker')),
                subrecord('FULL', unknown()),
                subrecord('CNAM', ckFormId('Audio Location', ['ALOC'])),
                subrecord('BNAM', format(uint32('Flags'), flags({
                    0: 'Use Controller Values'
                }))),
                req(subrecord('MNAM', scale(100, float('Layer 2 Trigger %')))),
                req(subrecord('NNAM', scale(100, float('Layer 3 Trigger %'))))
            ]),
            subrecord('XSRF', format(uint32('Special Rendering Flags'), flags({
                0: 'Unknown 0',
                1: 'Imposter',
                2: 'Use Full Shader in LOD'
            }))),
            subrecord('XSRD', size(4, bytes('Special Rendering Data'))),
            opts(subrecord('XTRG', ckFormId('Target', [
                'REFR', 'ACRE', 'ACHR', 'PGRE', 'PMIS',
                'PBEA'
            ])), {
                "persistent": true
            }),
            def('XLCM'),
            memberStruct('Patrol Data', [
                req(subrecord('XPRD', float('Idle Time'))),
                req(subrecord('XPPA', empty('Patrol Script Marker'))),
                req(subrecord('INAM', ckFormId('Idle', ['IDLE', 'NULL']))),
                req(def('EmbeddedScript')),
                req(subrecord('TNAM', ckFormId('Topic', ['DIAL', 'NULL'])))
            ]),
            subrecord('XRDO', struct('Radio Data', [
                float('Range Radius'),
                format(uint32('Broadcast Range Type'), enumeration({
                    0: 'Radius',
                    1: 'Everywhere',
                    2: 'Worldspace and Linked Interiors',
                    3: 'Linked Interiors',
                    4: 'Current Cell Only'
                })),
                float('Static Percentage'),
                ckFormId('Position Reference', [
                    'REFR', 'ACRE', 'ACHR', 'PGRE', 'PMIS',
                    'PBEA', 'NULL'
                ])
            ])),
            memberStruct('Ownership', [
                def('XOWN'),
                subrecord('XRNK', int32('Faction rank'))
            ]),
            subrecord('XLOC', struct('Lock Data', [
                uint8('Level'),
                size(3, bytes('Unused')),
                ckFormId('Key', ['KEYM', 'NULL']),
                format(uint8('Flags'), flags({
                    0: '',
                    1: '',
                    2: 'Leveled Lock'
                })),
                size(3, bytes('Unused')),
                size(8, bytes('Unknown'))
            ])),
            subrecord('XCNT', int32('Count')),
            subrecord('XRDS', float('Radius')),
            subrecord('XHLP', float('Health')),
            subrecord('XRAD', float('Radiation')),
            subrecord('XCHG', float('Charge')),
            memberStruct('Ammo', [
                req(subrecord('XAMT', ckFormId('Type', ['AMMO']))),
                req(subrecord('XAMC', int32('Count')))
            ]),
            sorted(memberArray('Reflected/Refracted By', 
                subrecord('XPWR', sortKey([0], struct('Water', [
                    ckFormId('Reference', ['REFR']),
                    format(uint32('Type'), flags({
                        0: 'Reflection',
                        1: 'Refraction'
                    }))
                ])))
            )),
            sorted(memberArray('Lit Water', 
                subrecord('XLTW', ckFormId('Water', ['REFR']))
            )),
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
            opts(subrecord('XATO', string('Activation Prompt')), {
                "transform": "keepcase"
            }),
            def('XESP'),
            subrecord('XEMI', ckFormId('Emittance', ['LIGH', 'REGN'])),
            subrecord('XMBR', ckFormId('MultiBound Reference', ['REFR'])),
            subrecord('XACT', format(uint32('Action Flag'), flags({
                0: 'Use Default',
                1: 'Activate',
                2: 'Open',
                3: 'Open by Default'
            }))),
            subrecord('ONAM', empty('Open by Default')),
            subrecord('XIBS', empty('Ignored By Sandbox')),
            subrecord('XNDP', struct('Navigation Door Link', [
                ckFormId('Navigation Mesh', ['NAVM']),
                format(int16('Teleport Marker Triangle'), def('REFRNavmeshTriangleToStr')),
                size(2, bytes('Unused'))
            ])),
            subrecord('XPOD', count(2, array('Portal Data', 
                ckFormId('Room', ['REFR', 'NULL'])
            ))),
            subrecord('XPTL', struct('Portal Data', [
                struct('Size', [
                    scale(2, float('Width')),
                    scale(2, float('Height'))
                ]),
                struct('Position', [
                    float('X'),
                    float('Y'),
                    float('Z')
                ]),
                struct('Rotation (Quaternion?)', [
                    float('q1'),
                    float('q2'),
                    float('q3'),
                    float('q4')
                ])
            ])),
            subrecord('XSED', uint8('SpeedTree Seed')),
            memberStruct('Room Data', [
                subrecord('XRMR', struct('Header', [
                    uint16('Linked Rooms Count'),
                    size(2, bytes('Unknown'))
                ])),
                sorted(memberArray('Linked Rooms', 
                    subrecord('XLRM', ckFormId('Linked Room', ['REFR']))
                ))
            ]),
            subrecord('XOCP', struct('Occlusion Plane Data', [
                struct('Size', [
                    scale(2, float('Width')),
                    scale(2, float('Height'))
                ]),
                struct('Position', [
                    float('X'),
                    float('Y'),
                    float('Z')
                ]),
                struct('Rotation (Quaternion?)', [
                    float('q1'),
                    float('q2'),
                    float('q3'),
                    float('q4')
                ])
            ])),
            subrecord('XORD', struct('Linked Occlusion Planes', [
                ckFormId('Right', ['REFR', 'NULL']),
                ckFormId('Left', ['REFR', 'NULL']),
                ckFormId('Bottom', ['REFR', 'NULL']),
                ckFormId('Top', ['REFR', 'NULL'])
            ])),
            def('XLOD'),
            def('XSCL'),
            def('DATAPosRot')
        ]
    })
};