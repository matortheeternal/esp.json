let {
    def, string, opts, sorted, array, 
    subrecord, bytes, size, conflictType, flags, 
    uint32, format, uint16, int16, struct, 
    req, ckFormId, uint8, sortKey, memberArray, 
    int8, enumeration, float, record
} = require('../helpers');

module.exports = () => {
    record('CREA', 'Creature', {
        members: [
            def('EDID'),
            def('FULL'),
            def('MODL'),
            def('CNTOs'),
            def('SPLOs'),
            subrecord('NIFZ', sorted(array('Models', 
                opts(string('Model'), {
                    "transform": "lowercase"
                })
            ))),
            subrecord('NIFT', conflictType('Ignore', size(0, bytes('Texture Files Hashes')))),
            req(subrecord('ACBS', struct('Configuration', [
                format(uint32('Flags'), flags({
                    0: 'Biped',
                    1: 'Essential',
                    2: 'Weapon & Shield',
                    3: 'Respawn',
                    4: 'Swims',
                    5: 'Flies',
                    6: 'Walks',
                    7: 'PC Level Offset',
                    8: 'Unused',
                    9: 'No Low Level Processing',
                    10: 'Unused',
                    11: 'No Blood Spray',
                    12: 'No Blood Decal',
                    13: '',
                    14: '',
                    15: 'No Head',
                    16: 'No Right Arm',
                    17: 'No Left Arm',
                    18: 'No Combat in Water',
                    19: 'No Shadow',
                    20: 'No Corpse Check'
                })),
                uint16('Base spell points'),
                uint16('Fatigue'),
                uint16('Barter gold'),
                int16('Level (offset)'),
                uint16('Calc min'),
                uint16('Calc max')
            ]))),
            sorted(memberArray('Factions', 
                subrecord('SNAM', sortKey([0], struct('Faction', [
                    ckFormId('Faction', ['FACT']),
                    uint8('Rank'),
                    size(3, bytes('Unused'))
                ])))
            )),
            subrecord('INAM', ckFormId('Death item', ['LVLI'])),
            def('SCRI'),
            req(subrecord('AIDT', struct('AI Data', [
                uint8('Aggression'),
                uint8('Confidence'),
                uint8('Energy Level'),
                uint8('Responsibility'),
                format(uint32('Buys/Sells and Services'), def('ServiceFlags')),
                format(int8('Teaches'), def('SkillEnum')),
                uint8('Maximum training level'),
                size(2, bytes('Unused'))
            ]))),
            memberArray('AI Packages', 
                subrecord('PKID', ckFormId('AI Package', ['PACK']))
            ),
            subrecord('KFFZ', sorted(array('Animations', 
                opts(string('Animation'), {
                    "transform": "lowercase"
                })
            ))),
            req(subrecord('DATA', struct('Creature Data', [
                format(uint8('Type'), enumeration({
                    0: 'Creature',
                    1: 'Daedra',
                    2: 'Undead',
                    3: 'Humanoid',
                    4: 'Horse',
                    5: 'Giant'
                })),
                uint8('Combat Skill'),
                uint8('Magic Skill'),
                uint8('Stealth Skill'),
                format(uint8('Soul'), def('SoulGemEnum')),
                size(1, bytes('Unused')),
                uint16('Health'),
                size(2, bytes('Unused')),
                uint16('Attack Damage'),
                uint8('Strength'),
                uint8('Intelligence'),
                uint8('Willpower'),
                uint8('Agility'),
                uint8('Speed'),
                uint8('Endurance'),
                uint8('Personality'),
                uint8('Luck')
            ]))),
            req(subrecord('RNAM', uint8('Attack reach'))),
            subrecord('ZNAM', ckFormId('Combat Style', ['CSTY'])),
            req(subrecord('TNAM', float('Turning Speed'))),
            req(subrecord('BNAM', float('Base Scale'))),
            req(subrecord('WNAM', float('Foot Weight'))),
            subrecord('NAM0', string('Blood Spray')),
            subrecord('NAM1', string('Blood Decal')),
            subrecord('CSCR', ckFormId('Inherits Sounds from', ['CREA'])),
            def('CSDTs')
        ]
    })
};