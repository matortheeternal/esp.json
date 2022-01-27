let {
    req, def, string, subrecord, memberStruct, 
    enumeration, uint32, format, record
} = require('../helpers');

module.exports = () => {
    record('CCRD', 'Caravan Card', {
        members: [
            req(def('EDID')),
            req(def('OBND')),
            def('FULL'),
            def('MODL'),
            def('ICON'),
            def('SCRI'),
            def('YNAM'),
            def('ZNAM'),
            memberStruct('High Res Image', [
                subrecord('TX00', string('Face')),
                subrecord('TX01', string('Back'))
            ]),
            memberStruct('Card', [
                subrecord('INTV', format(uint32('Suit'), enumeration({
                    0: '',
                    1: 'Hearts',
                    2: 'Spades',
                    3: 'Diamonds',
                    4: 'Clubs',
                    5: 'Joker'
                }))),
                subrecord('INTV', format(uint32('Value'), enumeration({
                    0: '',
                    1: 'Ace',
                    2: '2',
                    3: '3',
                    4: '4',
                    5: '5',
                    6: '6',
                    7: '7',
                    8: '8',
                    9: '9',
                    10: '10',
                    11: '',
                    12: 'Jack',
                    13: 'Queen',
                    14: 'King',
                    15: 'Joker'
                })))
            ]),
            subrecord('DATA', uint32('Value'))
        ]
    })
};