let {
    req, def, ckFormId, subrecord, uint16, 
    format, string, opts, sorted, array, 
    bytes, size, conflictType, flags, uint32, 
    int16, div, union, float, struct, 
    uint8, sortKey, memberArray, record
} = require('../helpers');

module.exports = () => {
    record('CREA', 'Creature', {
        members: [
            req(def('EDID')),
            req(def('OBND')),
            def('FULLActor'),
            def('MODLActor'),
            def('SPLOs'),
            subrecord('EITM', ckFormId('Unarmed Attack Effect', ['ENCH', 'SPEL'])),
            req(subrecord('EAMT', format(uint16('Unarmed Attack Animation'), def('AttackAnimationEnum')))),
            subrecord('NIFZ', sorted(array('Model List', 
                opts(string('Model'), {
                    "transform": "lowercase"
                })
            ))),
            subrecord('NIFT', conflictType('Ignore', size(0, bytes('Texture Files Hashes')))),
            req(subrecord('ACBS', struct('Configuration', [
                format(uint32('Flags'), flags({
                    0: 'Biped',
                    1: 'Essential',
                    2: 'Weapon & Shield?',
                    3: 'Respawn',
                    4: 'Swims',
                    5: 'Flies',
                    6: 'Walks',
                    7: 'PC Level Mult',
                    8: 'Unknown 8',
                    9: 'No Low Level Processing',
                    10: '',
                    11: 'No Blood Spray',
                    12: 'No Blood Decal',
                    13: '',
                    14: '',
                    15: 'No Head',
                    16: 'No Right Arm',
                    17: 'No Left Arm',
                    18: 'No Combat in Water',
                    19: 'No Shadow',
                    20: 'No VATS Melee',
                    21: 'Allow PC Dialogue',
                    22: 'Can\'t Open Doors',
                    23: 'Immobile',
                    24: 'Tilt Front/Back',
                    25: 'Tilt Left/Right',
                    26: 'No Knockdowns',
                    27: 'Not Pushable',
                    28: 'Allow Pickpocket',
                    29: 'Is Ghost',
                    30: 'No Rotating To Head-track',
                    31: 'Invulnerable'
                })),
                uint16('Fatigue'),
                uint16('Barter gold'),
                union('Level', 'CreaLevelDecider', [
                    int16('Level'),
                    format(int16('Level Mult'), div(1000))
                ]),
                uint16('Calc min'),
                uint16('Calc max'),
                uint16('Speed Multiplier'),
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
            subrecord('VTCK', ckFormId('Voice', ['VTYP'])),
            subrecord('TPLT', ckFormId('Template', ['CREA', 'LVLC'])),
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
            req(subrecord('DATA', struct('', [
                format(uint8('Type'), def('CreatureTypeEnum')),
                uint8('Combat Skill'),
                uint8('Magic Skill'),
                uint8('Stealth Skill'),
                int16('Health'),
                size(2, bytes('Unused')),
                int16('Damage'),
                struct('Attributes', [
                    uint8('Strength'),
                    uint8('Perception'),
                    uint8('Endurance'),
                    uint8('Charisma'),
                    uint8('Intelligence'),
                    uint8('Agility'),
                    uint8('Luck')
                ])
            ]))),
            req(subrecord('RNAM', uint8('Attack reach'))),
            subrecord('ZNAM', ckFormId('Combat Style', ['CSTY'])),
            req(subrecord('PNAM', ckFormId('Body Part Data', ['BPTD']))),
            req(subrecord('TNAM', float('Turning Speed'))),
            req(subrecord('BNAM', float('Base Scale'))),
            req(subrecord('WNAM', float('Foot Weight'))),
            req(subrecord('NAM4', format(uint32('Impact Material Type'), def('ImpactMaterialTypeEnum')))),
            req(subrecord('NAM5', format(uint32('Sound Level'), def('SoundLevelEnum')))),
            subrecord('CSCR', ckFormId('Inherits Sounds from', ['CREA'])),
            def('CSDTs'),
            subrecord('CNAM', ckFormId('Impact Dataset', ['IPDS'])),
            subrecord('LNAM', ckFormId('Melee Weapon List', ['FLST']))
        ]
    })
};