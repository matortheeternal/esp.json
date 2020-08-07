let {
    def, req, bytes, size, enumeration, 
    int8, format, uint8, struct, float, 
    uint32, subrecord, record
} = require('../helpers');

module.exports = () => {
    record('CLAS', 'Class', {
        members: [
            def('EDID'),
            req(def('FULL')),
            req(def('DESC')),
            def('ICON'),
            req(subrecord('DATA', struct('', [
                size(4, bytes('Unknown')),
                format(int8('Teaches'), enumeration({
                    0: 'One Handed',
                    1: 'Two Handed',
                    2: 'Archery',
                    3: 'Block',
                    4: 'Smithing',
                    5: 'Heavy Armor',
                    6: 'Light Armor',
                    7: 'Pickpocket',
                    8: 'Lockpicking',
                    9: 'Sneak',
                    10: 'Alchemy',
                    11: 'Speech',
                    12: 'Alteration',
                    13: 'Conjuration',
                    14: 'Destruction',
                    15: 'Illusion',
                    16: 'Restoration',
                    17: 'Enchanting'
                })),
                uint8('Maximum training level'),
                struct('Skill Weights', [
                    uint8('One Handed'),
                    uint8('Two Handed'),
                    uint8('Archery'),
                    uint8('Block'),
                    uint8('Smithing'),
                    uint8('Heavy Armor'),
                    uint8('Light Armor'),
                    uint8('Pickpocket'),
                    uint8('Lockpicking'),
                    uint8('Sneak'),
                    uint8('Alchemy'),
                    uint8('Speech'),
                    uint8('Alteration'),
                    uint8('Conjuration'),
                    uint8('Destruction'),
                    uint8('Illusion'),
                    uint8('Restoration'),
                    uint8('Enchanting')
                ]),
                float('Bleedout Default'),
                uint32('Voice Points'),
                struct('Attribute Weights', [
                    uint8('Health'),
                    uint8('Magicka'),
                    uint8('Stamina'),
                    uint8('Unknown')
                ])
            ])))
        ]
    })
};