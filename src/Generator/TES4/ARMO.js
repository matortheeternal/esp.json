let {
    def, uint16, subrecord, flags, format, 
    uint8, bytes, size, struct, req, 
    string, float, conflictType, memberStruct, div, 
    uint32, record
} = require('../helpers');

module.exports = () => {
    record('ARMO', 'Armor', {
        members: [
            def('EDID'),
            def('FULL'),
            def('SCRI'),
            def('ENAM'),
            subrecord('ANAM', uint16('Enchantment Points')),
            req(subrecord('BMDT', struct('', [
                format(uint16('Biped Flags'), flags({
                    0: 'Head',
                    1: 'Hair',
                    2: 'Upper Body',
                    3: 'Lower Body',
                    4: 'Hand',
                    5: 'Foot',
                    6: 'Right Ring',
                    7: 'Left Ring',
                    8: 'Amulet',
                    9: 'Weapon',
                    10: 'Back Weapon',
                    11: 'Side Weapon',
                    12: 'Quiver',
                    13: 'Shield',
                    14: 'Torch',
                    15: 'Tail'
                })),
                format(uint8('General Flags'), flags({
                    0: 'Hide Rings',
                    1: 'Hide Amulets',
                    2: '',
                    3: '',
                    4: '',
                    5: '',
                    6: 'Non-Playable',
                    7: 'Heavy armor'
                })),
                size(1, bytes('Unused'))
            ]))),
            memberStruct('Male biped model', [
                subrecord('MODL', string('Model FileName')),
                subrecord('MODB', conflictType('Benign', float('Bound Radius'))),
                subrecord('MODT', conflictType('Ignore', size(0, bytes('Texture Files Hashes'))))
            ]),
            memberStruct('Male world model', [
                subrecord('MOD2', string('Model FileName')),
                subrecord('MO2B', conflictType('Benign', float('Bound Radius'))),
                subrecord('MO2T', conflictType('Ignore', size(0, bytes('Texture Files Hashes'))))
            ]),
            subrecord('ICON', string('Male icon FileName')),
            memberStruct('Female biped model', [
                subrecord('MOD3', string('Model FileName')),
                subrecord('MO3B', conflictType('Benign', float('Bound Radius'))),
                subrecord('MO3T', conflictType('Ignore', size(0, bytes('Texture Files Hashes'))))
            ]),
            memberStruct('Female world model', [
                subrecord('MOD4', string('Model FileName')),
                subrecord('MO4B', conflictType('Benign', float('Bound Radius'))),
                subrecord('MO4T', conflictType('Ignore', size(0, bytes('Texture Files Hashes'))))
            ]),
            subrecord('ICO2', string('Female icon FileName')),
            req(subrecord('DATA', struct('', [
                format(uint16('Armor'), div(100)),
                uint32('Value'),
                uint32('Health'),
                float('Weight')
            ])))
        ]
    })
};