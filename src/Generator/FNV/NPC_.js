let {
    req, def, flags, uint32, format, 
    uint16, int16, div, union, float, 
    struct, subrecord, ckFormId, uint8, bytes, 
    size, sortKey, sorted, memberArray, string, 
    opts, array, int32, record
} = require('../helpers');

module.exports = () => {
    record('NPC_', 'Non-Player Character', {
        members: [
            req(def('EDID')),
            req(def('OBND')),
            def('FULLActor'),
            def('MODLActor'),
            req(subrecord('ACBS', struct('Configuration', [
                format(uint32('Flags'), flags({
                    0: 'Female',
                    1: 'Essential',
                    2: 'Is CharGen Face Preset',
                    3: 'Respawn',
                    4: 'Auto-calc stats',
                    5: '',
                    6: '',
                    7: 'PC Level Mult',
                    8: 'Use Template',
                    9: 'No Low Level Processing',
                    10: '',
                    11: 'No Blood Spray',
                    12: 'No Blood Decal',
                    13: '',
                    14: '',
                    15: '',
                    16: '',
                    17: '',
                    18: '',
                    19: '',
                    20: 'No VATS Melee',
                    21: '',
                    22: 'Can be all races',
                    23: 'Autocalc Service',
                    24: '',
                    25: '',
                    26: 'No Knockdowns',
                    27: 'Not Pushable',
                    28: 'Unknown 28',
                    29: '',
                    30: 'No Rotating To Head-track',
                    31: ''
                })),
                req(uint16('Fatigue')),
                uint16('Barter gold'),
                req(union('Level', 'CreaLevelDecider', [
                    req(int16('Level')),
                    req(format(int16('Level Mult'), div(1000)))
                ])),
                req(uint16('Calc min')),
                req(uint16('Calc max')),
                req(uint16('Speed Multiplier')),
                float('Karma (Alignment)'),
                int16('Disposition Base'),
                format(uint16('Template Flags'), def('TemplateFlags'))
            ]))),
            sorted(memberArray('Factions', 
                subrecord('SNAM', sortKey([0], struct('Faction', [
                    ckFormId('Faction', ['FACT']),
                    uint8('Rank'),
                    size(3, bytes('Unused'))
                ])))
            )),
            subrecord('INAM', ckFormId('Death item', ['LVLI'])),
            req(subrecord('VTCK', ckFormId('Voice', ['VTYP']))),
            subrecord('TPLT', ckFormId('Template', ['LVLN', 'NPC_'])),
            req(subrecord('RNAM', ckFormId('Race', ['RACE']))),
            def('SPLOs'),
            subrecord('EITM', ckFormId('Unarmed Attack Effect', ['ENCH', 'SPEL'])),
            req(subrecord('EAMT', format(uint16('Unarmed Attack Animation'), def('AttackAnimationEnum')))),
            def('DESTActor'),
            def('SCRIActor'),
            sorted(memberArray('Items', 
                def('CNTO')
            )),
            def('AIDT'),
            memberArray('Packages', 
                subrecord('PKID', ckFormId('Package', ['PACK']))
            ),
            subrecord('KFFZ', sorted(array('Animations', 
                opts(string('Animation'), {
                    "transform": "lowercase"
                })
            ))),
            req(subrecord('CNAM', ckFormId('Class', ['CLAS']))),
            req(subrecord('DATA', struct('', [
                int32('Base Health'),
                struct('Attributes', [
                    uint8('Strength'),
                    uint8('Perception'),
                    uint8('Endurance'),
                    uint8('Charisma'),
                    uint8('Intelligence'),
                    uint8('Agility'),
                    uint8('Luck')
                ]),
                bytes('Unused')
            ]))),
            subrecord('DNAM', struct('', [
                struct('Skill Values', [
                    uint8('Barter'),
                    uint8('Big Guns'),
                    uint8('Energy Weapons'),
                    uint8('Explosives'),
                    uint8('Lockpick'),
                    uint8('Medicine'),
                    uint8('Melee Weapons'),
                    uint8('Repair'),
                    uint8('Science'),
                    uint8('Guns'),
                    uint8('Sneak'),
                    uint8('Speech'),
                    uint8('Survival'),
                    uint8('Unarmed')
                ]),
                struct('Skill Offsets', [
                    uint8('Barter'),
                    uint8('Big Guns'),
                    uint8('Energy Weapons'),
                    uint8('Explosives'),
                    uint8('Lockpick'),
                    uint8('Medicine'),
                    uint8('Melee Weapons'),
                    uint8('Repair'),
                    uint8('Science'),
                    uint8('Guns'),
                    uint8('Sneak'),
                    uint8('Speech'),
                    uint8('Survival'),
                    uint8('Unarmed')
                ])
            ])),
            sorted(memberArray('Head Parts', 
                subrecord('PNAM', ckFormId('Head Part', ['HDPT']))
            )),
            subrecord('HNAM', ckFormId('Hair', ['HAIR'])),
            subrecord('LNAM', float('Hair length')),
            subrecord('ENAM', ckFormId('Eyes', ['EYES'])),
            req(subrecord('HCLR', struct('Hair color', [
                uint8('Red'),
                uint8('Green'),
                uint8('Blue'),
                size(1, bytes('Unused'))
            ]))),
            subrecord('ZNAM', ckFormId('Combat Style', ['CSTY'])),
            req(subrecord('NAM4', format(uint32('Impact Material Type'), def('ImpactMaterialTypeEnum')))),
            def('FaceGenNPC'),
            req(subrecord('NAM5', uint16('Unknown'))),
            req(subrecord('NAM6', float('Height'))),
            req(subrecord('NAM7', float('Weight')))
        ]
    })
};