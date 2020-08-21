let {
    flags, showUnknown, formatUnion, def, ckFormId, 
    subrecord, req, float, struct, scale, 
    enumeration, uint32, format, unknown, array, 
    uint8, bytes, size, sorted, memberArray, 
    memberStruct, empty, sortKey, int16, int32, 
    record
} = require('../helpers');

module.exports = () => {
    record('REFR', 'Placed Object', {
        flags: formatUnion('REFRRecordFlagsDecider', [
            showUnknown(flags({
                5: 'Deleted',
                10: 'Persistent',
                11: 'Initially Disabled',
                12: 'Ignored',
                16: 'Is Full LOD',
                26: 'Filter (Collision Geometry)',
                27: 'Bounding Box (Collision Geometry)',
                28: 'Reflected By Auto Water',
                30: 'Ground',
                31: 'Multibound'
            })),
            showUnknown(flags({
                5: 'Deleted',
                9: 'Hidden From Local Map',
                10: 'Persistent',
                11: 'Initially Disabled',
                12: 'Ignored',
                15: 'Visible when distant',
                16: 'Is Full LOD',
                26: 'Filter (Collision Geometry)',
                27: 'Bounding Box (Collision Geometry)',
                28: 'Reflected By Auto Water',
                29: 'Don\'t Havok Settle',
                30: 'No Respawn',
                31: 'Multibound'
            })),
            showUnknown(flags({
                5: 'Deleted',
                10: 'Persistent',
                11: 'Initially Disabled',
                12: 'Ignored',
                16: 'Is Full LOD',
                25: 'No AI Acquire',
                26: 'Filter (Collision Geometry)',
                27: 'Bounding Box (Collision Geometry)',
                28: 'Reflected By Auto Water',
                29: 'Don\'t Havok Settle',
                30: 'Ground',
                31: 'Multibound'
            })),
            showUnknown(flags({
                5: 'Deleted',
                6: 'Hidden From Local Map',
                8: 'Inaccessible',
                10: 'Persistent',
                11: 'Initially Disabled',
                12: 'Ignored',
                16: 'Is Full LOD',
                26: 'Filter (Collision Geometry)',
                27: 'Bounding Box (Collision Geometry)',
                28: 'Reflected By Auto Water',
                29: 'Don\'t Havok Settle',
                30: 'No Respawn',
                31: 'Multibound'
            })),
            showUnknown(flags({
                5: 'Deleted',
                8: 'Doesn\'t Light Water',
                9: 'Casts Shadows',
                10: 'Persistent',
                11: 'Initially Disabled',
                12: 'Ignored',
                16: 'Never Fades',
                17: 'Doesn\'t Light Landscape',
                25: 'No AI Acquire',
                28: 'Reflected By Auto Water',
                29: 'Don\'t Havok Settle',
                30: 'No Respawn',
                31: 'Multibound'
            })),
            showUnknown(flags({
                5: 'Deleted',
                9: 'Motion Blur',
                10: 'Persistent',
                11: 'Initially Disabled',
                12: 'Ignored',
                16: 'Is Full LOD',
                26: 'Filter (Collision Geometry)',
                27: 'Bounding Box (Collision Geometry)',
                28: 'Reflected By Auto Water',
                29: 'Don\'t Havok Settle',
                30: 'No Respawn',
                31: 'Multibound'
            })),
            showUnknown(flags({
                5: 'Deleted',
                10: 'Persistent',
                11: 'Initially Disabled',
                12: 'Ignored',
                16: 'Is Full LOD',
                28: 'Reflected By Auto Water',
                29: 'Don\'t Havok Settle',
                30: 'No Respawn',
                31: 'Multibound'
            })),
            showUnknown(flags({
                5: 'Deleted',
                10: 'Persistent',
                11: 'Initially Disabled',
                12: 'Ignored',
                16: 'Is Full LOD',
                25: 'No AI Acquire',
                28: 'Reflected By Auto Water',
                29: 'Don\'t Havok Settle',
                30: 'No Respawn',
                31: 'Multibound'
            }))
        ]),
        members: [
            def('EDID'),
            def('VMAD'),
            req(subrecord('NAME', ckFormId('Base', [
                'TREE', 'SNDR', 'ACTI', 'DOOR', 'STAT',
                'FURN', 'CONT', 'ARMO', 'AMMO', 'LVLN',
                'LVLC', 'MISC', 'WEAP', 'BOOK', 'KEYM',
                'ALCH', 'LIGH', 'GRAS', 'ASPC', 'IDLM',
                'ARMA', 'INGR', 'MSTT', 'TACT', 'TXST',
                'FLOR', 'SLGM', 'SCRL', 'SOUN', 'APPA',
                'SPEL', 'ARTO', 'ADDN'
            ]))),
            subrecord('XMBO', struct('Bound Half Extents', [
                float('X'),
                float('Y'),
                float('Z')
            ])),
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
                    3: 'Portal Box',
                    4: 'Unknown 4'
                }))
            ])),
            subrecord('XORD', unknown()),
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
            subrecord('XPOD', array('Portal Data', 
                struct('References', [
                    ckFormId('Origin', ['REFR', 'NULL']),
                    ckFormId('Destination', ['REFR', 'NULL'])
                ])
            )),
            subrecord('XPTL', struct('Room Portal (unused)', [
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
            memberStruct('Bound Data', [
                subrecord('XRMR', struct('Header', [
                    uint8('Linked Rooms Count'),
                    format(uint8('Flags'), flags({
                        0: 'Unknown 1',
                        1: 'Unknown 2',
                        2: 'Unknown 3',
                        3: 'Unknown 4',
                        4: 'Unknown 5',
                        5: 'Unknown 6',
                        6: 'Has Image Space',
                        7: 'Has Lighting Template'
                    })),
                    size(2, bytes('Unknown'))
                ])),
                subrecord('LNAM', ckFormId('Lighting Template', ['LGTM'])),
                subrecord('INAM', ckFormId('Image Space', ['IMGS'])),
                sorted(memberArray('Linked Rooms', 
                    subrecord('XLRM', ckFormId('Linked Room', ['REFR']))
                ))
            ]),
            subrecord('XMBP', empty('MultiBound Primitive Marker')),
            def('XRGD'),
            def('XRGB'),
            subrecord('XRDS', float('Radius')),
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
            subrecord('XEMI', ckFormId('Emittance', ['LIGH', 'REGN'])),
            subrecord('XLIG', struct('Light Data', [
                float('FOV 90+/-'),
                float('Fade 1.35+/-'),
                size(4, bytes('Unknown')),
                float('Shadow Depth Bias'),
                size(4, bytes('Unknown'))
            ])),
            subrecord('XALP', struct('Alpha', [
                uint8('Cutoff'),
                uint8('Base')
            ])),
            subrecord('XTEL', struct('Teleport Destination', [
                ckFormId('Door', ['REFR']),
                def('PosRot'),
                format(uint32('Flags'), flags({
                    0: 'No Alarm'
                }))
            ])),
            subrecord('XTNM', ckFormId('Teleport Message Box', ['MESG'])),
            subrecord('XMBR', ckFormId('MultiBound Reference', ['REFR'])),
            subrecord('XWCN', size(0, bytes('Unknown'))),
            subrecord('XWCS', size(0, bytes('Unknown'))),
            subrecord('XWCU', struct('Water Velocity', [
                float('X Offset'),
                float('Y Offset'),
                float('Z Offset'),
                size(4, bytes('Unknown')),
                float('X Angle'),
                float('Y Angle'),
                float('Z Angle'),
                size(0, bytes('Unknown'))
            ])),
            subrecord('XCVL', struct('Unknown', [
                size(4, bytes('Unknown')),
                float('X Angle'),
                size(4, bytes('Unknown'))
            ])),
            subrecord('XCZR', ckFormId('Unknown', [
                'PLYR', 'ACHR', 'REFR', 'PGRE', 'PHZD',
                'PMIS', 'PARW', 'PBAR', 'PBEA', 'PCON',
                'PFLA', 'NULL'
            ])),
            subrecord('XCZA', unknown()),
            subrecord('XCZC', ckFormId('Unknown', ['CELL', 'NULL'])),
            def('XSCL'),
            subrecord('XSPC', ckFormId('Spawn Container', ['REFR'])),
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
            subrecord('XLIB', ckFormId('Leveled Item Base Object', ['LVLI'])),
            def('XLCM'),
            subrecord('XLCN', ckFormId('Persistent Location', ['LCTN'])),
            subrecord('XTRI', uint32('Collision Layer')),
            subrecord('XLOC', struct('Lock Data', [
                format(uint8('Level'), enumeration({
                    1: 'Novice',
                    25: 'Apprentice',
                    50: 'Adept',
                    75: 'Expert',
                    100: 'Master',
                    255: 'Requires Key'
                })),
                size(3, bytes('Unused')),
                ckFormId('Key', ['KEYM', 'NULL']),
                format(uint8('Flags'), flags({
                    0: '',
                    1: '',
                    2: 'Leveled Lock'
                })),
                size(3, bytes('Unused')),
                size(8, bytes('Unused'))
            ])),
            subrecord('XEZN', ckFormId('Encounter Zone', ['ECZN'])),
            subrecord('XNDP', struct('Navigation Door Link', [
                ckFormId('Navigation Mesh', ['NAVM']),
                format(int16('Teleport Marker Triangle'), def('REFRNavmeshTriangleToStr')),
                size(2, bytes('Unused'))
            ])),
            subrecord('XLRT', array('Location Ref Type', 
                ckFormId('Ref', ['LCRT', 'NULL'])
            )),
            subrecord('XIS2', empty('Ignored by Sandbox')),
            def('Ownership'),
            subrecord('XCNT', int32('Item Count')),
            subrecord('XCHG', float('Charge')),
            subrecord('XLRL', ckFormId('Location Reference', [
                'LCRT', 'LCTN', 'NULL'
            ])),
            def('XESP'),
            memberArray('Linked References', 
                subrecord('XLKR', struct('Linked Reference', [
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
                ]))
            ),
            memberArray('Patrol', 
                memberStruct('Data', [
                    req(subrecord('XPRD', float('Idle Time'))),
                    req(subrecord('XPPA', empty('Patrol Script Marker'))),
                    req(subrecord('INAM', ckFormId('Idle', ['IDLE', 'NULL']))),
                    subrecord('SCHR', size(0, bytes('Unused'))),
                    subrecord('SCTX', size(0, bytes('Unused'))),
                    def('PDTOs')
                ])
            ),
            subrecord('XACT', format(uint32('Action Flag'), flags({
                0: 'Use Default',
                1: 'Activate',
                2: 'Open',
                3: 'Open by Default'
            }))),
            subrecord('XHTW', float('Head-Tracking Weight')),
            subrecord('XFVC', float('Favor Cost')),
            subrecord('ONAM', empty('Open by Default')),
            memberStruct('Map Marker', [
                subrecord('XMRK', empty('Map Marker Data')),
                req(subrecord('FNAM', format(uint8('Map Flags'), flags({
                    0: 'Visible',
                    1: 'Can Travel To',
                    2: '"Show All" Hidden'
                })))),
                req(def('FULL')),
                req(subrecord('TNAM', struct('', [
                    format(uint8('Type'), def('MapMarkerEnum')),
                    size(1, bytes('Unused'))
                ])))
            ]),
            subrecord('XATR', ckFormId('Attach Ref', [
                'REFR', 'PGRE', 'PHZD', 'PMIS', 'PARW',
                'PBAR', 'PBEA', 'PCON', 'PFLA'
            ])),
            def('XLOD'),
            def('DataPosRot')
        ]
    })
};