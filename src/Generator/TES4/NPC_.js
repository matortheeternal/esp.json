let {
    def, flags, uint32, format, uint16, 
    int16, struct, subrecord, req, ckFormId, 
    uint8, bytes, size, sortKey, sorted, 
    memberArray, int8, string, array, float, 
    conflictType, record
} = require('../helpers');

module.exports = () => {
    record('NPC_', 'Non-Player Character', {
        members: [
            def('EDID'),
            def('FULL'),
            def('MODL'),
            req(subrecord('ACBS', struct('Configuration', [
                format(uint32('Flags'), flags({
                    0: 'Female',
                    1: 'Essential',
                    2: '',
                    3: 'Respawn',
                    4: 'Auto-calc stats',
                    5: '',
                    6: '',
                    7: 'PC Level Offset',
                    8: '',
                    9: 'No Low Level Processing',
                    10: '',
                    11: '',
                    12: '',
                    13: 'No Rumors',
                    14: 'Summonable',
                    15: 'No Persuasion',
                    16: '',
                    17: '',
                    18: '',
                    19: '',
                    20: 'Can Corpse Check'
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
            req(subrecord('RNAM', ckFormId('Race', ['RACE']))),
            def('CNTOs'),
            def('SPLOs'),
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
                string('Animation')
            ))),
            req(subrecord('CNAM', ckFormId('Class', ['CLAS']))),
            req(subrecord('DATA', struct('Stats', [
                uint8('Armorer'),
                uint8('Athletics'),
                uint8('Blade'),
                uint8('Block'),
                uint8('Blunt'),
                uint8('Hand to Hand'),
                uint8('Heavy Armor'),
                uint8('Alchemy'),
                uint8('Alteration'),
                uint8('Conjuration'),
                uint8('Destruction'),
                uint8('Illusion'),
                uint8('Mysticism'),
                uint8('Restoration'),
                uint8('Acrobatics'),
                uint8('Light Armor'),
                uint8('Marksman'),
                uint8('Mercantile'),
                uint8('Security'),
                uint8('Sneak'),
                uint8('Speechcraft'),
                uint16('Health'),
                size(2, bytes('Unused')),
                uint8('Strength'),
                uint8('Intelligence'),
                uint8('Willpower'),
                uint8('Agility'),
                uint8('Speed'),
                uint8('Endurance'),
                uint8('Personality'),
                uint8('Luck')
            ]))),
            subrecord('HNAM', ckFormId('Hair', ['HAIR'])),
            subrecord('LNAM', float('Hair length')),
            subrecord('ENAM', array('Eyes', 
                ckFormId('Eyes', ['EYES'])
            )),
            req(subrecord('HCLR', struct('Hair color', [
                uint8('Red'),
                uint8('Green'),
                uint8('Blue'),
                size(1, bytes('Unused'))
            ]))),
            subrecord('ZNAM', ckFormId('Combat Style', ['CSTY'])),
            def('FaceGen'),
            subrecord('FNAM', conflictType('Benign', size(0, bytes('Unknown'))))
        ]
    })
};