let {
    flags, showUnknown, formatUnion, def, ckFormId, 
    subrecord, req, float, struct, scale, 
    enumeration, uint32, format, array, unknown, 
    uint8, bytes, size, sorted, memberArray, 
    memberStruct, empty, conflictType, opts, sortKey, 
    int16, int32, string, record
} = require('../helpers');

module.exports = () => {
    record('REFR', 'Placed Object', {
        flags: formatUnion('REFRRecordFlagsDecider', [
            showUnknown(flags({
                4: 'Ground Piece',
                5: 'Deleted',
                8: 'LOD Respects Enable State',
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
                4: 'Ground Piece',
                5: 'Deleted',
                8: 'LOD Respects Enable State',
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
                4: 'Ground Piece',
                5: 'Deleted',
                10: 'Persistent',
                11: 'Initially Disabled',
                12: 'Ignored',
                16: 'Is Full LOD',
                25: 'No AI Acquire',
                26: 'Filter (Collision Geometry)',
                27: 'Bounding Box (Collision Geometry)',
                29: 'Don\'t Havok Settle',
                30: 'Ground',
                31: 'Multibound'
            })),
            showUnknown(flags({
                2: 'Minimal Use Door',
                5: 'Deleted',
                6: 'Hidden From Local Map',
                8: 'Inaccessible',
                10: 'Persistent',
                11: 'Initially Disabled',
                12: 'Ignored',
                16: 'Is Full LOD',
                26: 'Filter (Collision Geometry)',
                27: 'Bounding Box (Collision Geometry)',
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
                4: 'Ground Piece',
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
                4: 'Ground Piece',
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
            req(subrecord('NAME', ckFormId('Base', def('sigBaseObjects')))),
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
                def('FloatColors', { name: 'Color' }),
                float('Unknown'),
                format(uint32('Type'), enumeration({
                    0: 'None',
                    1: 'Box',
                    2: 'Sphere',
                    3: 'Plane',
                    4: 'Line',
                    5: 'Ellipsoid'
                }))
            ])),
            subrecord('XPOD', array('Portal Data', 
                struct('References', [
                    ckFormId('Origin', ['REFR', 'NULL']),
                    ckFormId('Destination', ['REFR', 'NULL'])
                ])
            )),
            subrecord('XPTL', struct('Room Portal', [
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
            subrecord('XMBP', conflictType('Ignore', empty('MultiBound Primitive Marker'))),
            def('XRGD'),
            def('XRGB'),
            subrecord('XRDS', float('Radius')),
            def('XSCL'),
            subrecord('XEMI', ckFormId('Emittance', ['LIGH', 'REGN'])),
            subrecord('XLIG', struct('Light Data', [
                float('FOV 90+/-'),
                float('Fade 1.0+/-'),
                float('End Distance Cap'),
                float('Shadow Depth Bias'),
                float('Near Clip'),
                float('Volumetric Intensity')
            ])),
            sorted(memberArray('Lit Water', 
                subrecord('XLTW', ckFormId('Water', ['REFR']))
            )),
            subrecord('XALP', struct('Alpha', [
                uint8('Cutoff'),
                uint8('Base')
            ])),
            subrecord('XTEL', struct('Teleport Destination', [
                opts(ckFormId('Door', ['REFR']), {
                    "persistent": true
                }),
                def('PosRot'),
                format(uint32('Flags'), flags({
                    0: 'No Alarm',
                    1: 'No Load Screen',
                    2: 'Relative Position'
                })),
                ckFormId('Transition Interior', ['CELL', 'NULL'])
            ])),
            subrecord('XTNM', ckFormId('Teleport Loc Name', ['MESG'])),
            subrecord('XMBR', ckFormId('MultiBound Reference', ['REFR'])),
            subrecord('XWCN', unknown()),
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
            subrecord('XASP', ckFormId('Acoustic Restriction', ['REFR'])),
            subrecord('XATP', empty('Activation Point')),
            subrecord('XAMC', uint32('Ammo Count')),
            subrecord('XLKT', empty('Linked Ref Transient')),
            subrecord('XLYR', ckFormId('Layer', ['LAYR'])),
            subrecord('XMSP', ckFormId('Material Swap', ['MSWP'])),
            subrecord('XRFG', ckFormId('Reference Group', ['RFGP'])),
            subrecord('XRDO', struct('Radio', [
                float('Frequency'),
                float('Min Weak Distance'),
                float('Max Weak Distance'),
                format(uint32('Flags'), flags({
                    0: 'Ignores Distance Checks'
                }))
            ])),
            subrecord('XBSD', struct('Spline', [
                float('Slack'),
                float('Thickness'),
                float('Unknown'),
                float('Unknown'),
                float('Unknown'),
                format(uint8('Wind - Detached End'), def('BoolEnum')),
                size(0, bytes('Unused'))
            ])),
            subrecord('XPDD', struct('Projected Decal', [
                float('Width Scale'),
                float('Height Scale')
            ])),
            subrecord('XSPC', ckFormId('Spawn Container', ['REFR'])),
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
            subrecord('XLIB', ckFormId('Leveled Item Base Object', ['LVLI'])),
            def('XLCM'),
            subrecord('XLCN', ckFormId('Persistent Location', ['LCTN'])),
            subrecord('XTRI', uint32('Collision Layer')),
            subrecord('XLOC', struct('Lock Data', [
                format(uint8('Level'), enumeration({
                    0: 'None',
                    1: 'Novice 1',
                    25: 'Novice 25',
                    50: 'Advanced',
                    75: 'Expert',
                    100: 'Master',
                    251: 'Barred',
                    252: 'Chained',
                    253: 'Requires Terminal',
                    254: 'Inaccessible',
                    255: 'Requires Key'
                })),
                conflictType('Ignore', size(3, bytes('Unused'))),
                ckFormId('Key', ['KEYM', 'NULL']),
                format(uint8('Flags'), flags({
                    0: '',
                    1: '',
                    2: 'Leveled Lock'
                })),
                conflictType('Ignore', size(3, bytes('Unused'))),
                unknown()
            ])),
            subrecord('XEZN', ckFormId('Encounter Zone', ['ECZN'])),
            subrecord('XNDP', struct('Navigation Door Link', [
                ckFormId('Navigation Mesh', ['NAVM']),
                format(int16('Teleport Marker Triangle'), def('REFRNavmeshTriangleToStr')),
                conflictType('Ignore', size(2, bytes('Unused')))
            ])),
            subrecord('XLRL', conflictType('BenignIfAdded', ckFormId('Location Reference', [
                'LCRT', 'LCTN', 'NULL'
            ]))),
            subrecord('XLRT', array('Location Ref Type', 
                ckFormId('Ref', ['LCRT', 'NULL'])
            )),
            subrecord('XIS2', empty('Ignored by Sandbox')),
            def('XOWN'),
            def('XRNK'),
            subrecord('XCNT', int32('Item Count')),
            subrecord('XHLT', uint32('Health %')),
            def('XESP'),
            memberArray('Linked References', 
                subrecord('XLKR', struct('Linked Reference', [
                    ckFormId('Keyword/Ref', [
                        'KYWD', 'PLYR', 'ACHR', 'REFR', 'PGRE',
                        'PHZD', 'PMIS', 'PARW', 'PBAR', 'PBEA',
                        'PCON', 'PFLA', 'NULL'
                    ]),
                    ckFormId('Ref', def('sigReferences'))
                ]))
            ),
            memberArray('Patrol', 
                memberStruct('Data', [
                    req(subrecord('XPRD', float('Idle Time'))),
                    req(subrecord('XPPA', empty('Patrol Script Marker'))),
                    req(subrecord('INAM', ckFormId('Idle', ['IDLE', 'NULL']))),
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
                    2: '"Show All" Hidden',
                    3: 'Use Location Name'
                })))),
                req(def('FULL')),
                req(subrecord('TNAM', struct('', [
                    format(uint8('Type'), enumeration({
                        0: 'Cave',
                        1: 'City',
                        2: 'Diamond City',
                        3: 'Encampment',
                        4: 'Factory / Industrial Site',
                        5: 'Gov\'t Building / Monument',
                        6: 'Metro Station',
                        7: 'Military Base',
                        8: 'Natural Landmark',
                        9: 'Office / Civic Building',
                        10: 'Ruins - Town',
                        11: 'Ruins - Urban',
                        12: 'Sanctuary',
                        13: 'Settlement',
                        14: 'Sewer / Utility Tunnels',
                        15: 'Vault',
                        16: 'Airfield',
                        17: 'Bunker Hill',
                        18: 'Camper',
                        19: 'Car',
                        20: 'Church',
                        21: 'Country Club',
                        22: 'Custom House',
                        23: 'Drive-In',
                        24: 'Elevated Highway',
                        25: 'Faneuil Hall',
                        26: 'Farm',
                        27: 'Filling Station',
                        28: 'Forested',
                        29: 'Goodneighbor',
                        30: 'Graveyard',
                        31: 'Hospital',
                        32: 'Industrial Dome',
                        33: 'Industrial Stacks',
                        34: 'Institute',
                        35: 'Irish Pride',
                        36: 'Junkyard',
                        37: 'Observatory',
                        38: 'Pier',
                        39: 'Pond / Lake',
                        40: 'Quarry',
                        41: 'Radioactive Area',
                        42: 'Radio Tower',
                        43: 'Salem',
                        44: 'School',
                        45: 'Shipwreck',
                        46: 'Submarine',
                        47: 'Swan Pond',
                        48: 'Synth Head',
                        49: 'Town',
                        50: 'Brotherhood of Steel',
                        51: 'Brownstone Townhouse',
                        52: 'Bunker',
                        53: 'Castle',
                        54: 'Skyscraper',
                        55: 'Libertalia',
                        56: 'Low-Rise Building',
                        57: 'Minutemen',
                        58: 'Police Station',
                        59: 'Prydwen',
                        60: 'Railroad - Faction',
                        61: 'Railroad',
                        62: 'Satellite',
                        63: 'Sentinel',
                        64: 'USS Constitution',
                        65: 'Mechanist LairRaider settlementVassal settlementPotential Vassal settlement',
                        66: 'Custom 66',
                        67: 'Custom 67',
                        68: 'Custom 68',
                        69: 'Custom 69',
                        70: 'Custom 70',
                        71: 'Custom 71',
                        72: 'Custom 72',
                        73: 'Custom 73',
                        74: 'Custom 74',
                        75: 'Custom 75',
                        76: 'Custom 76',
                        77: 'Custom 77',
                        78: 'Custom 78',
                        79: 'Custom 79',
                        80: 'Custom 80',
                        81: 'Custom 81',
                        82: 'Custom 82',
                        83: 'Custom 83',
                        84: 'Custom 84',
                        85: 'Custom 85',
                        86: 'Custom 86',
                        87: 'Custom 87',
                        88: 'Custom 88',
                        89: 'Custom 89',
                        90: 'Custom 90',
                        91: 'Custom 91',
                        92: 'Custom 92',
                        93: 'Custom 93',
                        94: 'Custom 94',
                        95: 'Custom 95',
                        96: 'Custom 96',
                        97: 'Custom 97',
                        98: 'Custom 98',
                        99: 'Custom 99'
                    })),
                    size(1, bytes('Unused'))
                ])))
            ]),
            subrecord('XATR', ckFormId('Attach Ref', [
                'REFR', 'PGRE', 'PHZD', 'PMIS', 'PARW',
                'PBAR', 'PBEA', 'PCON', 'PFLA', 'ACHR'
            ])),
            memberArray('Spline Connection', 
                subrecord('XPLK', struct('Link', [
                    ckFormId('Ref', ['REFR', 'ACHR']),
                    unknown()
                ]))
            ),
            memberStruct('Power Grid', [
                subrecord('XWPG', uint32('Count')),
                memberArray('Connections', 
                    subrecord('XWPN', struct('Connection', [
                        ckFormId('Node 1', [
                            'REFR', 'ACHR', 'NULL'
                        ]),
                        ckFormId('Node 2', [
                            'REFR', 'ACHR', 'NULL'
                        ]),
                        ckFormId('Line', ['REFR', 'NULL'])
                    ]))
                )
            ]),
            subrecord('XCVR', unknown()),
            subrecord('XCVL', unknown()),
            subrecord('XCZR', ckFormId('Unknown', def('sigReferences'))),
            subrecord('XCZA', unknown()),
            subrecord('XCZC', ckFormId('Unknown', ['CELL', 'NULL'])),
            def('XLOD'),
            def('DataPosRot'),
            subrecord('MNAM', string('Comments'))
        ]
    })
};