let {
    def, req, bytes, size, enumeration, 
    int8, format, uint8, array, float, 
    uint32, subrecord, struct, record
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
                array('Skill Weights', 
                    uint8('Weight')
                ),
                float('Bleedout Default'),
                uint32('Voice Points'),
                array('Attribute Weights', 
                    uint8('Weight')
                )
            ])))
        ]
    })
};