let {
    addDef, def, flags, int0, format, 
    empty, uint32, struct, subrecord, uint8, 
    bytes, size, conflictType, memberUnion
} = require('../helpers');

module.exports = () => {
    addDef('BODTBOD2', 
        memberUnion('Biped Body Template', [
            subrecord('BOD2', struct('Biped Body Template', [
                def('FirstPersonFlagsU32'),
                format(int0('General Flags'), flags({
                    0: '(ARMA)Modulates Voice',
                    1: 'Unknown 2',
                    2: 'Unknown 3',
                    3: 'Unknown 4',
                    4: '(ARMO)Non-Playable',
                    5: 'Unknown 6',
                    6: 'Unknown 7',
                    7: 'Unknown 8'
                })),
                empty('Unused'),
                format(uint32('Armor Type'), def('ArmorTypeEnum'))
            ])),
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
        ])
    );
};