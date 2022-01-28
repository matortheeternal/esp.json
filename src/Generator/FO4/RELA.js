let {
    def, ckFormId, enumeration, uint8, format, 
    bytes, size, flags, struct, subrecord, 
    record
} = require('../helpers');

module.exports = () => {
    record('RELA', 'Relationship', {
        members: [
            def('EDID'),
            subrecord('DATA', struct('Data', [
                ckFormId('Parent', ['NPC_', 'NULL']),
                ckFormId('Child', ['NPC_', 'NULL']),
                format(uint8('Rank'), enumeration({
                    0: 'Lover',
                    1: 'Ally',
                    2: 'Confidant',
                    3: 'Friend',
                    4: 'Acquaintance',
                    5: 'Rival',
                    6: 'Foe',
                    7: 'Enemy',
                    8: 'Archnemesis'
                })),
                size(2, bytes('Unknown')),
                format(uint8('Flags'), flags({
                    0: 'Unknown 1',
                    1: 'Unknown 2',
                    2: 'Unknown 3',
                    3: 'Unknown 4',
                    4: 'Unknown 5',
                    5: 'Unknown 6',
                    6: 'Unknown 7',
                    7: 'Secret'
                })),
                ckFormId('Association Type', ['ASTP', 'NULL'])
            ]))
        ]
    })
};