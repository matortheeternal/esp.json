let {
    addDef, def, flags, uint8, format, 
    bytes, size, conflictType, uint32, struct, 
    subrecord
} = require('../helpers');

module.exports = () => {
    addDef('BODT', 
        subrecord('BODT', struct('Body Template', [
            def('FirstPersonFlagsU32'),
            format(uint8('General Flags'), flags({
                0: '(ARMA)Modulates Voice',
                1: 'Unknown 2',
                2: 'Unknown 3',
                3: 'Unknown 4',
                4: '(ARMO)Non-Playable',
                5: 'Unknown 6',
                6: 'Unknown 7',
                7: 'Unknown 8'
            })),
            conflictType('Ignore', size(3, bytes('Unused'))),
            format(uint32('Armor Type'), def('ArmorTypeEnum'))
        ]))
    );
};