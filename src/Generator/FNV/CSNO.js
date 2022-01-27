let {
    req, def, float, uint32, struct, 
    ckFormId, flags, format, subrecord, string, 
    memberStruct, record
} = require('../helpers');

module.exports = () => {
    record('CSNO', 'Casino', {
        members: [
            req(def('EDID')),
            def('FULL'),
            subrecord('DATA', struct('Data', [
                float('Decks % Before Shuffle'),
                float('BlackJack Payout Ratio'),
                struct('Slot Reel Stops', [
                    uint32('Symbol 1'),
                    uint32('Symbol 2'),
                    uint32('Symbol 3'),
                    uint32('Symbol 4'),
                    uint32('Symbol 5'),
                    uint32('Symbol 6'),
                    uint32('Symbol W')
                ]),
                uint32('Number of Decks'),
                uint32('Max Winnings'),
                ckFormId('Currency', ['CHIP']),
                ckFormId('Casino Winnings Quest', ['QUST']),
                format(uint32('Flags'), flags({
                    0: 'Dealer Stay on Soft 17'
                }))
            ])),
            memberStruct('Casino Chip Models', [
                subrecord('MODL', string('$1 Chip')),
                subrecord('MODL', string('$5 Chip')),
                subrecord('MODL', string('$10 Chip')),
                subrecord('MODL', string('$25 Chip')),
                subrecord('MODL', string('$100 Chip')),
                subrecord('MODL', string('$500 Chip')),
                subrecord('MODL', string('Roulette Chip'))
            ]),
            subrecord('MODL', string('Slot Machine Model')),
            subrecord('MOD2', string('Slot Machine Model (again?)')),
            subrecord('MOD3', string('BlackJack Table Model')),
            subrecord('MODT', string('BlackJack Table Model related')),
            subrecord('MOD4', string('Roulette Table Model')),
            memberStruct('Slot Reel Textures', [
                subrecord('ICON', string('Symbol 1')),
                subrecord('ICON', string('Symbol 2')),
                subrecord('ICON', string('Symbol 3')),
                subrecord('ICON', string('Symbol 4')),
                subrecord('ICON', string('Symbol 5')),
                subrecord('ICON', string('Symbol 6')),
                subrecord('ICON', string('Symbol W'))
            ]),
            memberStruct('BlackJack Decks', [
                subrecord('ICO2', string('Deck 1')),
                subrecord('ICO2', string('Deck 2')),
                subrecord('ICO2', string('Deck 3')),
                subrecord('ICO2', string('Deck 4'))
            ])
        ]
    })
};