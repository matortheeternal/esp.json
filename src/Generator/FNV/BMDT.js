let {
    addDef, flags, uint32, format, uint8, 
    bytes, size, struct, subrecord, req
} = require('../helpers');

module.exports = () => {
    addDef('BMDT', 
        req(subrecord('BMDT', struct('Biped Data', [
            format(uint32('Biped Flags'), flags({
                0: 'Head',
                1: 'Hair',
                2: 'Upper Body',
                3: 'Left Hand',
                4: 'Right Hand',
                5: 'Weapon',
                6: 'PipBoy',
                7: 'Backpack',
                8: 'Necklace',
                9: 'Headband',
                10: 'Hat',
                11: 'Eye Glasses',
                12: 'Nose Ring',
                13: 'Earrings',
                14: 'Mask',
                15: 'Choker',
                16: 'Mouth Object',
                17: 'Body AddOn 1',
                18: 'Body AddOn 2',
                19: 'Body AddOn 3'
            })),
            format(uint8('General Flags'), flags({
                0: '1',
                1: '2',
                2: 'Has Backpack',
                3: 'Medium',
                4: '5',
                5: 'Power Armor',
                6: 'Non-Playable',
                7: 'Heavy'
            })),
            size(3, bytes('Unused'))
        ])))
    );
};