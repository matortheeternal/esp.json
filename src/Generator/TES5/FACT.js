let {
    def, ckFormId, int32, uint32, format, 
    subrecord, sortKey, struct, arrayOfSubrecord, req, 
    uint8, uint16, float, string, cstring, 
    arrayOfStruct, multiStruct, bytes, record
} = require('../helpers');

module.exports = () => {
    record('FACT', 'Faction', {
        members: [
            def('EDID'),
            def('FULL'),
            arrayOfSubrecord('Relations', 
                subrecord('XNAM', sortKey([0], struct('Relation', [
                    ckFormId('Faction', ['FACT', 'RACE']),
                    int32('Modifier'),
                    format(uint32('Group Combat Reaction'), {
                        0: 'Neutral',
                        1: 'Enemy',
                        2: 'Ally',
                        3: 'Friend'
                    })
                ])))
            ),
            req(subrecord('DATA', struct('Flags', [
                format(uint32('Flags'), {
                    0: 'Hidden From NPC',
                    1: 'Special Combat',
                    2: 'Unknown 3',
                    3: 'Unknown 4',
                    4: 'Unknown 5',
                    5: 'Unknown 6',
                    6: 'Track Crime',
                    7: 'Ignore Crimes: Murder',
                    8: 'Ignore Crimes: Assault',
                    9: 'Ignore Crimes: Stealing',
                    10: 'Ignore Crimes: Trespass',
                    11: 'Do Not Report Crimes Against Members',
                    12: 'Crime Gold - Use Defaults',
                    13: 'Ignore Crimes: Pickpocket',
                    14: 'Vendor',
                    15: 'Can Be Owner',
                    16: 'Ignore Crimes: Werewolf',
                    17: 'Unknown 18',
                    18: 'Unknown 19',
                    19: 'Unknown 20',
                    20: 'Unknown 21',
                    21: 'Unknown 22',
                    22: 'Unknown 23',
                    23: 'Unknown 24',
                    24: 'Unknown 25',
                    25: 'Unknown 26',
                    26: 'Unknown 27',
                    27: 'Unknown 28',
                    28: 'Unknown 29',
                    29: 'Unknown 30',
                    30: 'Unknown 31',
                    31: 'Unknown 32'
                })
            ]))),
            subrecord('JAIL', ckFormId('Exterior Jail Marker', ['REFR'])),
            subrecord('WAIT', ckFormId('Follower Wait Marker', ['REFR'])),
            subrecord('STOL', ckFormId('Stolen Goods Container', ['REFR'])),
            subrecord('PLCN', ckFormId('Player Inventory Container', ['REFR'])),
            subrecord('CRGR', ckFormId('Shared Crime Faction List', ['FLST'])),
            subrecord('JOUT', ckFormId('Jail Outfit', ['OTFT'])),
            req(subrecord('CRVA', struct('Crime Values', [
                format(uint8('Arrest'), {
                    0: 'False',
                    1: 'True'
                }),
                format(uint8('Attack On Sight'), {
                    0: 'False',
                    1: 'True'
                }),
                uint16('Murder'),
                uint16('Assault'),
                uint16('Trespass'),
                uint16('Pickpocket'),
                uint16('Unknown'),
                float('Steal Multiplier'),
                uint16('Escape'),
                uint16('Werewolf')
            ]))),
            arrayOfStruct('Ranks', 
                sortKey([0], multiStruct('Rank', [
                    subrecord('RNAM', uint32('Rank#')),
                    subrecord('MNAM', string('Male Title')),
                    subrecord('FNAM', string('Female Title')),
                    subrecord('INAM', cstring('Insignia Unused'))
                ]))
            ),
            subrecord('VEND', ckFormId('Vendor Buy/Sell List', ['FLST'])),
            subrecord('VENC', ckFormId('Merchant Container', ['REFR'])),
            subrecord('VENV', struct('Vendor Values', [
                uint16('Start Hour'),
                uint16('End Hour'),
                uint16('Radius'),
                bytes('Unknown 1', 2),
                format(uint8('Only Buys Stolen Items'), {
                    0: 'False',
                    1: 'True'
                }),
                format(uint8('Not/Sell Buy'), {
                    0: 'False',
                    1: 'True'
                }),
                bytes('Unknown 2', 2)
            ])),
            def('PLVD'),
            def('CITC'),
            def('CTDAsCount')
        ]
    })
};