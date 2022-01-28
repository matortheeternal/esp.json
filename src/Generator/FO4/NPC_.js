let {
    flags, def, req, uint32, format, 
    int16, div, union, uint16, bytes, 
    size, struct, subrecord, ckFormId, int8, 
    sortKey, sorted, memberArray, conflictType, uint8, 
    elementCounter, localized, string, opts, unknown, 
    float, memberStruct, unordered, empty, scale, 
    array, enumeration, record
} = require('../helpers');

module.exports = () => {
    record('NPC_', 'Non-Player Character (Actor)', {
        flags: flags({
            10: 'Unknown 10',
            12: 'Ignored',
            18: 'Compressed',
            19: 'Unknown 19',
            29: 'Bleedout Override'
        }),
        members: [
            def('EDID'),
            def('VMAD'),
            req(def('OBND')),
            def('PTRN'),
            def('STCP'),
            req(subrecord('ACBS', struct('Configuration', [
                format(uint32('Flags'), flags({
                    0: 'Female',
                    1: 'Essential',
                    2: 'Is CharGen Face Preset',
                    3: 'Respawn',
                    4: 'Auto-calc stats',
                    5: 'Unique',
                    6: 'Doesn\'t affect stealth meter',
                    7: 'PC Level Mult',
                    8: 'Unknown 8',
                    9: 'Calc For Each Template',
                    10: 'Unknown 10',
                    11: 'Protected',
                    12: 'Unknown 12',
                    13: 'Unknown 13',
                    14: 'Summonable',
                    15: 'Unknown 15',
                    16: 'Doesn\'t bleed',
                    17: 'Unknown 17',
                    18: 'Bleedout Override',
                    19: 'Opposite Gender Anims',
                    20: 'Simple Actor',
                    21: 'Unknown 21',
                    22: 'Unknown 22',
                    23: 'No Activation/Hellos',
                    24: 'Diffuse Alpha Test',
                    25: 'Unknown 25',
                    26: 'Unknown 26',
                    27: 'Unknown 27',
                    28: 'Unknown 28',
                    29: 'Is Ghost',
                    30: 'Unknown 30',
                    31: 'Invulnerable'
                })),
                req(int16('XP Value Offset')),
                req(union('Level', 'NPCLevelDecider', [
                    req(int16('Level')),
                    req(format(int16('Level Mult'), div(1000)))
                ])),
                req(uint16('Calc min level')),
                req(uint16('Calc max level')),
                int16('Disposition Base'),
                format(uint16('Use Template Actors'), flags({
                    0: 'Traits',
                    1: 'Stats',
                    2: 'Factions',
                    3: 'Spell List',
                    4: 'AI Data',
                    5: 'AI Packages',
                    6: 'Model/Animation',
                    7: 'Base Data',
                    8: 'Inventory',
                    9: 'Script',
                    10: 'Def Pack List',
                    11: 'Attack Data',
                    12: 'Keywords'
                })),
                uint16('Bleedout Override'),
                size(2, bytes('Unknown'))
            ]))),
            sorted(memberArray('Factions', 
                subrecord('SNAM', sortKey([0], struct('Faction', [
                    ckFormId('Faction', ['FACT']),
                    int8('Rank')
                ])))
            )),
            subrecord('INAM', ckFormId('Death item', ['LVLI'])),
            subrecord('VTCK', ckFormId('Voice', ['VTYP'])),
            subrecord('TPLT', ckFormId('Default Template', ['LVLN', 'NPC_'])),
            subrecord('LTPT', ckFormId('Legendary Template', ['LVLN', 'NPC_'])),
            subrecord('LTPC', ckFormId('Legendary Chance', ['GLOB'])),
            subrecord('TPTA', struct('Template Actors', [
                ckFormId('Traits', [
                    'LVLN', 'NPC_', 'NULL'
                ]),
                ckFormId('Stats', [
                    'LVLN', 'NPC_', 'NULL'
                ]),
                ckFormId('Factions', [
                    'LVLN', 'NPC_', 'NULL'
                ]),
                ckFormId('Spell List', [
                    'LVLN', 'NPC_', 'NULL'
                ]),
                ckFormId('AI Data', [
                    'LVLN', 'NPC_', 'NULL'
                ]),
                ckFormId('AI Packages', [
                    'LVLN', 'NPC_', 'NULL'
                ]),
                ckFormId('Model/Animation', [
                    'LVLN', 'NPC_', 'NULL'
                ]),
                ckFormId('Base Data', [
                    'LVLN', 'NPC_', 'NULL'
                ]),
                ckFormId('Inventory', [
                    'LVLN', 'NPC_', 'NULL'
                ]),
                ckFormId('Script', [
                    'LVLN', 'NPC_', 'NULL'
                ]),
                ckFormId('Def Pack List', [
                    'LVLN', 'NPC_', 'NULL'
                ]),
                ckFormId('Attack Data', [
                    'LVLN', 'NPC_', 'NULL'
                ]),
                ckFormId('Keywords', [
                    'LVLN', 'NPC_', 'NULL'
                ])
            ])),
            req(subrecord('RNAM', ckFormId('Race', ['RACE']))),
            def('SPCT'),
            def('SPLOs'),
            def('DEST'),
            subrecord('WNAM', ckFormId('Skin', ['ARMO'])),
            subrecord('ANAM', ckFormId('Far away model', ['ARMO'])),
            subrecord('ATKR', ckFormId('Attack Race', ['RACE'])),
            sorted(memberArray('Attacks', 
                def('AttackData')
            )),
            subrecord('SPOR', ckFormId('Spectator Override Package List', ['FLST'])),
            subrecord('OCOR', ckFormId('Observe Dead Body Override Package List', ['FLST'])),
            subrecord('GWOR', ckFormId('Guard Warn Override Package List', ['FLST'])),
            subrecord('ECOR', ckFormId('Combat Override Package List', ['FLST'])),
            subrecord('FCPL', ckFormId('Follower Command Package List', ['FLST'])),
            subrecord('RCLR', ckFormId('Follower Elevator Package List', ['FLST'])),
            subrecord('PRKZ', conflictType('Benign', uint32('Perk Count'))),
            elementCounter('PRKZ - Perk Count', 
                sorted(memberArray('Perks', 
                    subrecord('PRKR', sortKey([0], struct('Perk', [
                        ckFormId('Perk', ['PERK']),
                        uint8('Rank')
                    ])))
                ))
            ),
            def('PRPS'),
            def('FTYP'),
            def('NTRM'),
            def('COCT'),
            def('CNTOs'),
            def('AIDT'),
            memberArray('Packages', 
                subrecord('PKID', ckFormId('Package', ['PACK']))
            ),
            def('KSIZ'),
            def('KWDAs'),
            def('APPR'),
            def('ObjectTemplate'),
            req(subrecord('CNAM', ckFormId('Class', ['CLAS']))),
            def('FULL'),
            opts(subrecord('SHRT', conflictType('Translate', localized(string('Short Name')))), {
                "transform": "keepcase"
            }),
            subrecord('DATA', bytes('Marker')),
            subrecord('DNAM', struct('', [
                uint16('Unknown'),
                uint16('Unknown'),
                uint16('Far Away Model Distance'),
                uint16('Geared Up Weapons')
            ])),
            sorted(memberArray('Head Parts', 
                subrecord('PNAM', ckFormId('Head Part', ['HDPT']))
            )),
            subrecord('HCLF', ckFormId('Hair Color', ['CLFM'])),
            subrecord('BCLF', ckFormId('Facial Hair Color', ['CLFM'])),
            subrecord('ZNAM', ckFormId('Combat Style', ['CSTY'])),
            subrecord('GNAM', ckFormId('Gift Filter', ['FLST'])),
            req(subrecord('NAM5', unknown())),
            req(subrecord('NAM6', float('Height Min'))),
            req(subrecord('NAM7', float('Unused'))),
            subrecord('NAM4', float('Height Max')),
            subrecord('MWGT', struct('Weight', [
                float('Thin'),
                float('Muscular'),
                float('Fat')
            ])),
            req(subrecord('NAM8', format(uint32('Sound Level'), def('SoundLevelEnum')))),
            memberStruct('Actor Sounds', [
                req(subrecord('CS2H', conflictType('Benign', uint32('Count')))),
                elementCounter('CS2H - Count', 
                    sorted(memberArray('Sounds', 
                        unordered(sortKey([0], memberStruct('Sound', [
                            subrecord('CS2K', ckFormId('Keyword', ['KYWD'])),
                            req(subrecord('CS2D', ckFormId('Sound', ['SNDR'])))
                        ])))
                    ))
                ),
                req(subrecord('CS2E', empty('End Marker'))),
                req(subrecord('CS2F', size(1, bytes('Finalize'))))
            ]),
            subrecord('CSCR', ckFormId('Inherits Sounds From', ['NPC_'])),
            subrecord('PFRN', ckFormId('Power Armor Stand', ['FURN'])),
            subrecord('DOFT', ckFormId('Default Outfit', ['OTFT'])),
            subrecord('SOFT', ckFormId('Sleeping Outfit', ['OTFT'])),
            subrecord('DPLT', ckFormId('Default Package List', ['FLST'])),
            subrecord('CRIF', ckFormId('Crime Faction', ['FACT'])),
            subrecord('FTST', ckFormId('Head Texture', ['TXST'])),
            subrecord('QNAM', struct('Texture lighting', [
                req(scale(255, float('Red'))),
                req(scale(255, float('Green'))),
                req(scale(255, float('Blue'))),
                float('Alpha')
            ])),
            subrecord('MSDK', array('Morph Keys', 
                format(uint32('Key'), def('MorphValueToStr'))
            )),
            subrecord('MSDV', array('Morph Values', 
                float('Value')
            )),
            sorted(memberArray('Face Tinting Layers', 
                sortKey([0], memberStruct('Layer', [
                    subrecord('TETI', sortKey([1], struct('Index', [
                        format(uint16('Data Type'), enumeration({
                            0: '',
                            1: 'Value/Color',
                            2: 'Value'
                        })),
                        format(uint16('Index'), def('TintLayerToStr'))
                    ]))),
                    req(subrecord('TEND', struct('Data', [
                        format(uint8('Value'), div(100)),
                        def('ByteColors', { name: 'Color' }),
                        int16('Template Color Index')
                    ])))
                ]))
            )),
            subrecord('MRSV', struct('Body Morph Region Values', [
                float('Head'),
                float('Upper Torso'),
                float('Arms'),
                float('Lower Torso'),
                float('Legs')
            ])),
            sorted(memberArray('Face Morphs', 
                sortKey([0], memberStruct('Face Morph', [
                    subrecord('FMRI', format(uint32('Index'), def('FaceMorphToStr'))),
                    subrecord('FMRS', struct('Values', [
                        float('Position - X'),
                        float('Position - Y'),
                        float('Position - Z'),
                        float('Rotation - X'),
                        float('Rotation - Y'),
                        float('Rotation - Z'),
                        float('Scale'),
                        bytes('Unknown')
                    ]))
                ]))
            )),
            subrecord('FMIN', float('Facial Morph Intensity')),
            def('ATTX')
        ]
    })
};