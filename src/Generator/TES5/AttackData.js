let {
    addDef, float, ckFormId, flags, uint32, 
    format, subrecord, struct, string, sortKey, 
    multiStruct
} = require('../helpers');

module.exports = () => {
    addDef('AttackData', 
        sortKey([1], multiStruct('Attack', [
            subrecord('ATKD', struct('Attack Data', [
                float('Damage Mult'),
                float('Attack Chance'),
                ckFormId('Attack Spell', [
                    'SPEL',    'SHOU',    'NULL'
                ]),
                format(uint32('Attack Flags'), flags({
                    0: 'Ignore Weapon',
                    1: 'Bash Attack',
                    2: 'Power Attack',
                    3: 'Left Attack',
                    4: 'Rotating Attack',
                    5: 'Unknown 5',
                    6: 'Unknown 6',
                    7: 'Unknown 7',
                    8: 'Unknown 8',
                    9: 'Unknown 9',
                    10: 'Unknown 10',
                    11: 'Unknown 11',
                    12: 'Unknown 12',
                    13: 'Unknown 13',
                    14: 'Unknown 14',
                    15: 'Unknown 15',
                    16: 'Unknown 16',
                    17: 'Unknown 17',
                    18: 'Unknown 18',
                    19: 'Unknown 19',
                    20: 'Unknown 20',
                    21: 'Unknown 21',
                    22: 'Unknown 22',
                    23: 'Unknown 23',
                    24: 'Unknown 24',
                    25: 'Unknown 25',
                    26: 'Unknown 26',
                    27: 'Unknown 27',
                    28: 'Unknown 28',
                    29: 'Unknown 29',
                    30: 'Unknown 30',
                    31: 'Override Data'
                })),
                float('Attack Angle'),
                float('Strike Angle'),
                float('Stagger'),
                ckFormId('Attack Type', ['KYWD', 'NULL']),
                float('Knockdown'),
                float('Recovery Time'),
                float('Stamina Mult')
            ])),
            subrecord('ATKE', string('Attack Event'))
        ]))
    );
};