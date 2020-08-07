let {
    flags, def, req, ckFormId, subrecord, 
    int8, format, sortKey, struct, sorted, 
    array, count, bytes, size, float, 
    enumeration, uint32, int32, empty, string, 
    memberArray, uint16, memberStruct, opts, record
} = require('../helpers');

module.exports = () => {
    record('RACE', 'Race', {
        flags: flags({
            12: 'Ignored',
            19: 'Critter?'
        }),
        members: [
            def('EDID'),
            def('FULL'),
            req(def('DESC')),
            def('SPCT'),
            def('SPLOs'),
            subrecord('WNAM', ckFormId('Skin', ['ARMO', 'NULL'])),
            def('BODTBOD2'),
            def('KSIZ'),
            def('KWDAs'),
            req(subrecord('DATA', struct('', [
                count(7, sorted(array('Skill Boosts', 
                    sortKey([0], struct('Skill Boost', [
                        format(int8('Skill'), def('ActorValueEnum')),
                        int8('Boost')
                    ]))
                ))),
                size(2, bytes('Unknown')),
                float('Male Height'),
                float('Female Height'),
                float('Male Weight'),
                float('Female Weight'),
                def('RACE_DATAFlags01'),
                float('Starting Health'),
                float('Starting Magicka'),
                float('Starting Stamina'),
                float('Base Carry Weight'),
                float('Base Mass'),
                float('Acceleration rate'),
                float('Deceleration rate'),
                format(uint32('Size'), enumeration({
                    0: 'Small',
                    1: 'Medium',
                    2: 'Large',
                    3: 'Extra Large'
                })),
                format(int32('Head Biped Object'), def('BipedObjectEnum')),
                format(int32('Hair Biped Object'), def('BipedObjectEnum')),
                float('Injured Health Pct'),
                format(int32('Shield Biped Object'), def('BipedObjectEnum')),
                float('Health Regen'),
                float('Magicka Regen'),
                float('Stamina Regen'),
                float('Unarmed Damage'),
                float('Unarmed Reach'),
                format(int32('Body Biped Object'), def('BipedObjectEnum')),
                float('Aim Angle Tolerance'),
                float('Flight Radius'),
                float('Angular Acceleration Rate'),
                float('Angular Tolerance'),
                format(uint32('Flags 2'), flags({
                    0: 'Use Advanced Avoidance',
                    1: 'Non-Hostile',
                    2: 'Unknown 2',
                    3: 'Unknown 3',
                    4: 'Allow Mounted Combat'
                })),
                struct('Mount Data', [
                    req(float('Offset X')),
                    float('Offset Y'),
                    float('Unknown'),
                    req(float('Unknown')),
                    float('Unknown'),
                    req(float('Unknown')),
                    float('Unknown'),
                    req(float('Unknown')),
                    float('Unknown')
                ])
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
            req(subrecord('DNAM', struct('Decapitate Armors', [
                ckFormId('Male', ['NULL', 'ARMO']),
                ckFormId('Female', ['NULL', 'ARMO'])
            ]))),
            req(subrecord('HCLF', struct('Default Hair Colors', [
                ckFormId('Male', ['NULL', 'CLFM']),
                ckFormId('Female', ['NULL', 'CLFM'])
            ]))),
            req(subrecord('TINL', uint16('Total Number of Tints in List'))),
            req(subrecord('PNAM', float('FaceGen - Main clamp'))),
            req(subrecord('UNAM', float('FaceGen - Face clamp'))),
            req(subrecord('ATKR', ckFormId('Attack Race', ['RACE']))),
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
            subrecord('HNAM', sorted(array('Hairs', 
                ckFormId('Hair', ['HDPT', 'NULL'])
            ))),
            subrecord('ENAM', sorted(array('Eyes', 
                ckFormId('Eye', ['EYES', 'NULL'])
            ))),
            subrecord('GNAM', ckFormId('Body Part Data', ['BPTD', 'NULL'])),
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
            subrecord('NAM4', ckFormId('Material Type', ['MATT', 'NULL'])),
            subrecord('NAM5', ckFormId('Impact Data Set', ['IPDS', 'NULL'])),
            subrecord('NAM7', ckFormId('Decapitation FX', ['ARTO', 'NULL'])),
            subrecord('ONAM', ckFormId('Open Loot Sound', ['SNDR', 'NULL'])),
            subrecord('LNAM', ckFormId('Close Loot Sound', ['SNDR', 'NULL'])),
            opts(memberArray('Biped Object Names', 
                subrecord('NAME', string('Name'))
            ), {
                "notAlignable": 1
            }),
            sorted(memberArray('Movement Types', 
                sortKey([0], memberStruct('Movement Types', [
                    subrecord('MTYP', ckFormId('Movement Type', ['MOVT', 'NULL'])),
                    subrecord('SPED', struct('Override Values', [
                        float('Left - Walk'),
                        float('Left - Run'),
                        float('Right - Walk'),
                        float('Right - Run'),
                        float('Forward - Walk'),
                        float('Forward - Run'),
                        float('Back - Walk'),
                        float('Back - Run'),
                        float('Rotate - Walk'),
                        float('Rotate - Walk'),
                        float('Unknown')
                    ]))
                ]))
            )),
            subrecord('VNAM', format(uint32('Equipment Flags'), def('EquipType'))),
            sorted(memberArray('Equip Slots', 
                subrecord('QNAM', ckFormId('Equip Slot', ['EQUP', 'NULL']))
            )),
            subrecord('UNES', ckFormId('Unarmed Equip Slot', ['EQUP', 'NULL'])),
            memberArray('Phoneme Target Names', 
                subrecord('PHTN', string('Name'))
            ),
            def('PHWT'),
            subrecord('WKMV', ckFormId('Base Movement Default - Walk', ['MOVT', 'NULL'])),
            subrecord('RNMV', ckFormId('Base Movement Default - Run', ['MOVT', 'NULL'])),
            subrecord('SWMV', ckFormId('Base Movement Default - Swim', ['MOVT', 'NULL'])),
            subrecord('FLMV', ckFormId('Base Movement Default - Fly', ['MOVT', 'NULL'])),
            subrecord('SNMV', ckFormId('Base Movement Default - Sneak', ['MOVT', 'NULL'])),
            subrecord('SPMV', ckFormId('Base Movement Default - Sprint', ['MOVT', 'NULL'])),
            req(memberStruct('Head Data', [
                req(subrecord('NAM0', empty('Head Data Marker'))),
                req(memberStruct('Male Head Data', [
                    req(subrecord('MNAM', empty('Male Data Marker'))),
                    sorted(memberArray('Head Parts', 
                        def('HeadPart')
                    )),
                    def('Morphs'),
                    sorted(memberArray('Race Presets Male', 
                        subrecord('RPRM', ckFormId('Preset NPC', ['NPC_', 'NULL']))
                    )),
                    sorted(memberArray('Available Hair Colors Male', 
                        subrecord('AHCM', ckFormId('Hair Color', ['CLFM', 'NULL']))
                    )),
                    sorted(memberArray('Face Details Texture Set List Male', 
                        subrecord('FTSM', ckFormId('Texture Set', ['TXST', 'NULL']))
                    )),
                    subrecord('DFTM', ckFormId('Default Face Texture Male', ['TXST', 'NULL'])),
                    def('Tints'),
                    def('MODL')
                ])),
                req(memberStruct('Female Head Data', [
                    req(subrecord('NAM0', empty('Head Data Marker'))),
                    req(subrecord('FNAM', empty('Female Data Marker'))),
                    sorted(memberArray('Head Parts', 
                        def('HeadPart')
                    )),
                    def('Morphs'),
                    sorted(memberArray('Race Presets Female', 
                        subrecord('RPRF', ckFormId('Preset NPC', ['NPC_', 'NULL']))
                    )),
                    sorted(memberArray('Available Hair Colors Female', 
                        subrecord('AHCF', ckFormId('Hair Color', ['CLFM', 'NULL']))
                    )),
                    sorted(memberArray('Face Details Texture Set List Female', 
                        subrecord('FTSF', ckFormId('Texture Set', ['TXST', 'NULL']))
                    )),
                    subrecord('DFTF', ckFormId('Default Face Texture Female', ['TXST', 'NULL'])),
                    def('Tints'),
                    def('MODL')
                ]))
            ])),
            subrecord('NAM8', ckFormId('Morph race', ['RACE', 'NULL'])),
            subrecord('RNAM', ckFormId('Armor race', ['RACE', 'NULL']))
        ]
    })
};