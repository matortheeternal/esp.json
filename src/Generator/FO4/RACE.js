let {
    flags, def, req, ckFormId, subrecord, 
    float, struct, uint32, format, enumeration, 
    bytes, size, int32, int16, uint8, 
    empty, string, sorted, memberArray, uint16, 
    sortKey, memberStruct, unordered, record
} = require('../helpers');

module.exports = () => {
    record('RACE', 'Race', {
        flags: flags({
            12: 'Ignored',
            19: 'Unknown 19'
        }),
        members: [
            def('EDID'),
            def('STCP'),
            def('FULL'),
            req(def('DESC')),
            def('SPCT'),
            def('SPLOs'),
            subrecord('WNAM', ckFormId('Skin', ['ARMO', 'NULL'])),
            def('BOD2'),
            def('KSIZ'),
            def('KWDAs'),
            def('PRPS'),
            def('APPR'),
            req(subrecord('DATA', struct('Data', [
                float('Male Height'),
                float('Female Height'),
                struct('Male Default Weight', [
                    float('Thin'),
                    float('Muscular'),
                    float('Fat')
                ]),
                struct('Female Default Weight', [
                    float('Thin'),
                    float('Muscular'),
                    float('Fat')
                ]),
                format(uint32('Flags'), flags({
                    0: 'Playable',
                    1: 'FaceGen Head',
                    2: 'Child',
                    3: 'Tilt Front/Back',
                    4: 'Tilt Left/Right',
                    5: 'No Shadow',
                    6: 'Swims',
                    7: 'Flies',
                    8: 'Walks',
                    9: 'Immobile',
                    10: 'Not Pushable',
                    11: 'No Combat In Water',
                    12: 'No Rotating to Head-Track',
                    13: 'Don\'t Show Blood Spray',
                    14: 'Don\'t Show Blood Decal',
                    15: 'Uses Head Track Anims',
                    16: 'Spells Align w/Magic Node',
                    17: 'Use World Raycasts For FootIK',
                    18: 'Allow Ragdoll Collision',
                    19: 'Regen HP In Combat',
                    20: 'Can\'t Open Doors',
                    21: 'Allow PC Dialogue',
                    22: 'No Knockdowns',
                    23: 'Allow Pickpocket',
                    24: 'Always Use Proxy Controller',
                    25: 'Don\'t Show Weapon Blood',
                    26: 'Overlay Head Part List',
                    27: 'Override Head Part List',
                    28: 'Can Pickup Items',
                    29: 'Allow Multiple Membrane Shaders',
                    30: 'Can Dual Wield',
                    31: 'Avoids Roads'
                })),
                float('Acceleration Rate'),
                float('Deceleration Rate'),
                format(uint32('Size'), enumeration({
                    0: 'Small',
                    1: 'Medium',
                    2: 'Large',
                    3: 'Extra Large'
                })),
                size(8, bytes('Unknown')),
                float('Injured Health Pct'),
                format(int32('Shield Biped Object'), def('BipedObjectEnum')),
                format(int32('Beard Biped Object'), def('BipedObjectEnum')),
                format(int32('Body Biped Object'), def('BipedObjectEnum')),
                float('Aim Angle Tolerance'),
                float('Flight Radius'),
                float('Angular Acceleration Rate'),
                float('Angular Tolerance'),
                format(uint32('Flags 2'), flags({
                    0: 'Use Advanced Avoidance',
                    1: 'Non-Hostile',
                    2: 'Floats',
                    3: 'Unknown 3',
                    4: 'Unknown 4',
                    5: 'Head Axis Bit 0',
                    6: 'Head Axis Bit 1',
                    7: 'Can Melee When Knocked Down',
                    8: 'Use Idle Chatter During Combat',
                    9: 'Ungendered',
                    10: 'Can Move When Knocked Down',
                    11: 'Use Large Actor Pathing',
                    12: 'Use Subsegmented Damage',
                    13: 'Flight - Defer Kill',
                    14: 'Unknown 14',
                    15: 'Flight - Allow Procedural Crash Land',
                    16: 'Disable Weapon Culling',
                    17: 'Use Optimal Speeds',
                    18: 'Has Facial Rig',
                    19: 'Can Use Crippled Limbs',
                    20: 'Use Quadruped Controller',
                    21: 'Low Priority Pushable',
                    22: 'Cannot Use Playable Items'
                })),
                size(36, bytes('Unknown')),
                format(int32('Pipboy Biped Object'), def('BipedObjectEnum')),
                int16('XP Value'),
                float('Severable - Debris Scale'),
                uint8('Severable - Debris Count'),
                uint8('Severable - Decal Count'),
                float('Explodable - Debris Scale'),
                uint8('Explodable - Debris Count'),
                uint8('Explodable - Decal Count'),
                ckFormId('Severable - Explosion', ['EXPL', 'NULL']),
                ckFormId('Severable - Debris', ['DEBR', 'NULL']),
                ckFormId('Severable - Impact DataSet', ['IPDS', 'NULL']),
                ckFormId('Explodable - Explosion', ['EXPL', 'NULL']),
                ckFormId('Explodable - Debris', ['DEBR', 'NULL']),
                ckFormId('Explodable - Impact DataSet', ['IPDS', 'NULL']),
                float('OnCripple - Debris Scale'),
                uint8('OnCripple - Debris Count'),
                uint8('OnCripple - Decal Count'),
                ckFormId('OnCripple - Explosion', ['EXPL', 'NULL']),
                ckFormId('OnCripple - Debris', ['DEBR', 'NULL']),
                ckFormId('OnCripple - Impact DataSet', ['IPDS', 'NULL']),
                ckFormId('Explodable - Subsegment Explosion', ['EXPL', 'NULL']),
                float('Orientation Limits - Pitch'),
                float('Orientation Limits - Roll')
            ]))),
            subrecord('MNAM', empty('Male Marker')),
            subrecord('ANAM', string('Male Skeletal Model')),
            def('MODT'),
            subrecord('FNAM', empty('Female Marker')),
            subrecord('ANAM', string('Female Skeletal Model')),
            def('MODT'),
            subrecord('NAM2', empty('Marker NAM2 #1')),
            sorted(memberArray('Movement Type Names', 
                subrecord('MTNM', string('Name'))
            )),
            req(subrecord('VTCK', struct('Voices', [
                ckFormId('Male', ['VTYP']),
                ckFormId('Female', ['VTYP'])
            ]))),
            subrecord('HCLF', struct('Default Hair Colors', [
                ckFormId('Male', ['NULL', 'CLFM']),
                ckFormId('Female', ['NULL', 'CLFM'])
            ])),
            subrecord('TINL', uint16('Total Number of Tints in List')),
            req(subrecord('PNAM', float('FaceGen - Main clamp'))),
            req(subrecord('UNAM', float('FaceGen - Face clamp'))),
            subrecord('ATKR', ckFormId('Attack Race', ['RACE'])),
            sorted(memberArray('Attacks', 
                def('AttackData')
            )),
            req(memberStruct('Body Data', [
                req(subrecord('NAM1', empty('Body Data Marker'))),
                req(memberStruct('Male Body Data', [
                    subrecord('MNAM', empty('Male Data Marker')),
                    req(sorted(memberArray('Parts', 
                        sortKey([0], memberStruct('Part', [
                            subrecord('INDX', format(uint32('Index'), def('BodyPartIndexEnum'))),
                            def('MODL')
                        ]))
                    )))
                ])),
                req(memberStruct('Female Body Data', [
                    req(subrecord('FNAM', empty('Female Data Marker'))),
                    req(sorted(memberArray('Parts', 
                        sortKey([0], memberStruct('Part', [
                            subrecord('INDX', format(uint32('Index'), def('BodyPartIndexEnum'))),
                            def('MODL')
                        ]))
                    )))
                ]))
            ])),
            subrecord('GNAM', ckFormId('Body Part Data', ['BPTD'])),
            subrecord('NAM2', empty('Marker NAM2 #2')),
            req(subrecord('NAM3', empty('Marker NAM3 #3'))),
            req(memberStruct('Male Behavior Graph', [
                subrecord('MNAM', empty('Male Data Marker')),
                def('MODL')
            ])),
            req(memberStruct('Female Behavior Graph', [
                req(subrecord('FNAM', empty('Female Data Marker'))),
                def('MODL')
            ])),
            subrecord('NAM4', ckFormId('Impact Material Type', ['MATT'])),
            subrecord('NAM5', ckFormId('Impact Data Set', ['IPDS'])),
            subrecord('NAM7', ckFormId('Dismember Blood Art', ['ARTO'])),
            subrecord('CNAM', ckFormId('Meat Cap TextureSet', ['TXST'])),
            subrecord('NAM2', ckFormId('Collar TextureSet', ['TXST'])),
            subrecord('ONAM', ckFormId('Sound - Open Corpse', ['SNDR'])),
            subrecord('LNAM', ckFormId('Sound - Close Corpse', ['SNDR'])),
            memberArray('Biped Object Names', 
                subrecord('NAME', string('Name'))
            ),
            def('RaceRBPC'),
            sorted(memberArray('Movement Data Overrides', 
                sortKey([0], memberStruct('Override', [
                    subrecord('MTYP', ckFormId('Movement Type', ['MOVT'])),
                    def('SPED')
                ]))
            )),
            subrecord('VNAM', format(uint32('Equipment Flags'), def('EquipType'))),
            memberArray('Equip Slots', 
                memberStruct('Equip Slot', [
                    subrecord('QNAM', ckFormId('Equip Slot', ['EQUP'])),
                    subrecord('ZNAM', string('Node'))
                ])
            ),
            subrecord('UNWP', ckFormId('Unarmed Weapon', ['WEAP'])),
            memberArray('Phoneme Target Names', 
                subrecord('PHTN', string('Name'))
            ),
            def('PHWT'),
            subrecord('WKMV', ckFormId('Base Movement Defaults - Default', ['MOVT'])),
            subrecord('SWMV', ckFormId('Base Movement Defaults - Swim', ['MOVT'])),
            subrecord('FLMV', ckFormId('Base Movement Defaults - Fly', ['MOVT'])),
            subrecord('SNMV', ckFormId('Base Movement Defaults - Sneak', ['MOVT'])),
            subrecord('NAM0', empty('Head Data Marker')),
            subrecord('MNAM', empty('Male Data Marker')),
            subrecord('NNAM', struct('Male Neck Fat Adjustments Scale', [
                size(4, bytes('Unknown')),
                float('X'),
                float('Y')
            ])),
            sorted(memberArray('Male Head Parts', 
                def('HeadPart')
            )),
            memberArray('Male Race Presets', 
                subrecord('RPRM', ckFormId('Preset NPC', ['NPC_', 'NULL']))
            ),
            memberArray('Male Hair Colors', 
                subrecord('AHCM', ckFormId('Hair Color', ['CLFM', 'NULL']))
            ),
            sorted(memberArray('Male Face Details', 
                subrecord('FTSM', ckFormId('Texture Set', ['TXST', 'NULL']))
            )),
            subrecord('DFTM', ckFormId('Male Default Face Texture', ['TXST'])),
            def('TintGroups', { name: 'Male Tint Layers' }),
            def('MorphGroups', { name: 'Male Morph Groups' }),
            def('FaceMorphs', { name: 'Male Face Morphs' }),
            subrecord('WMAP', string('Male Wrinkle Map Path')),
            subrecord('NAM0', empty('Head Data Marker')),
            subrecord('FNAM', empty('Female Data Marker')),
            subrecord('NNAM', struct('Female Neck Fat Adjustments Scale', [
                size(4, bytes('Unknown')),
                float('X'),
                float('Y')
            ])),
            sorted(memberArray('Female Head Parts', 
                def('HeadPart')
            )),
            memberArray('Female Race Presets', 
                subrecord('RPRF', ckFormId('Preset NPC', ['NPC_', 'NULL']))
            ),
            memberArray('Female Hair Colors', 
                subrecord('AHCF', ckFormId('Hair Color', ['CLFM', 'NULL']))
            ),
            sorted(memberArray('Female Face Details', 
                subrecord('FTSF', ckFormId('Texture Set', ['TXST', 'NULL']))
            )),
            subrecord('DFTF', ckFormId('Female Default Face Texture', ['TXST'])),
            def('TintGroups', { name: 'Female Tint Layers' }),
            def('MorphGroups', { name: 'Female Morph Groups' }),
            def('FaceMorphs', { name: 'Female Face Morphs' }),
            subrecord('WMAP', string('Female Wrinkle Map Path')),
            subrecord('NAM8', ckFormId('Morph Race', ['RACE'])),
            subrecord('RNAM', ckFormId('Armor Race', ['RACE'])),
            subrecord('SRAC', ckFormId('Subgraph Template Race', ['RACE'])),
            subrecord('SADD', ckFormId('Subgraph Additive Race', ['RACE'])),
            memberArray('Subgraph Data', 
                unordered(memberStruct('Data', [
                    subrecord('SGNM', string('Behaviour Graph')),
                    memberArray('Actor Keywords', 
                        subrecord('SAKD', ckFormId('Keyword', ['KYWD']))
                    ),
                    memberArray('Target Keywords', 
                        subrecord('STKD', ckFormId('Keyword', ['KYWD']))
                    ),
                    req(memberArray('Animation Paths', 
                        subrecord('SAPT', string('Path'))
                    )),
                    req(subrecord('SRAF', struct('Flags', [
                        format(uint16('Role'), enumeration({
                            0: 'MT',
                            1: 'Weapon',
                            2: 'Furniture',
                            3: 'Idle',
                            4: 'Pipboy'
                        })),
                        format(uint16('Perspective'), enumeration({
                            0: '3rd',
                            1: '1st'
                        }))
                    ])))
                ]))
            ),
            subrecord('PTOP', float('Idle Chatter Time Min')),
            subrecord('NTOP', float('Idle Chatter Time Max')),
            memberArray('Morph Values', 
                memberStruct('Value', [
                    subrecord('MSID', format(uint32('Index'), def('IntToHexStr'))),
                    subrecord('MSM0', string('Min Name')),
                    subrecord('MSM1', string('Max Name'))
                ])
            ),
            subrecord('MLSI', format(uint32('Morph Last Index'), def('IntToHexStr'))),
            subrecord('HNAM', string('Hair Color Lookup Texture')),
            subrecord('HLTX', string('Hair Color Extended Lookup Texture')),
            subrecord('QSTI', ckFormId('Dialogue Quest', ['QUST'])),
            def('BSMPSequence')
        ]
    })
};