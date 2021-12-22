let {
    def, ckFormId, int32, enumeration, uint32, 
    format, sortKey, struct, subrecord, sorted, 
    memberArray, flags, req, uint8, uint16, 
    float, localized, string, conflictType, memberStruct, 
    bytes, size, record
} = require('../helpers');

module.exports = () => {
    record('FACT', 'Faction', {
        members: [
            def('EDID'),
            def('FULL'),
            sorted(memberArray('Relations', 
                subrecord('XNAM', sortKey([0], struct('Relation', [
                    ckFormId('Faction', ['FACT', 'RACE']),
                    int32('Modifier'),
                    format(uint32('Group Combat Reaction'), enumeration({
                        0: 'Neutral',
                        1: 'Enemy',
                        2: 'Ally',
                        3: 'Friend'
                    }))
                ])))
            )),
            req(subrecord('DATA', struct('Flags', [
                format(uint32('Flags'), flags({
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
                }))
            ]))),
            subrecord('JAIL', ckFormId('Exterior Jail Marker', ['REFR'])),
            subrecord('WAIT', ckFormId('Follower Wait Marker', ['REFR'])),
            subrecord('STOL', ckFormId('Stolen Goods Container', ['REFR'])),
            subrecord('PLCN', ckFormId('Player Inventory Container', ['REFR'])),
            subrecord('CRGR', ckFormId('Shared Crime Faction List', ['FLST'])),
            subrecord('JOUT', ckFormId('Jail Outfit', ['OTFT'])),
            subrecord('CRVA', struct('Crime Values', [
                format(uint8('Arrest'), enumeration({
                    0: 'False',
                    1: 'True'
                })),
                format(uint8('Attack On Sight'), enumeration({
                    0: 'False',
                    1: 'True'
                })),
                uint16('Murder'),
                uint16('Assault'),
                uint16('Trespass'),
                uint16('Pickpocket'),
                uint16('Unknown'),
                float('Steal Multiplier'),
                uint16('Escape'),
                uint16('Werewolf')
            ])),
            memberArray('Ranks', 
                sortKey([0], memberStruct('Rank', [
                    subrecord('RNAM', uint32('Rank#')),
                    subrecord('MNAM', conflictType('Translate', localized(string('Male Title')))),
                    subrecord('FNAM', conflictType('Translate', localized(string('Female Title')))),
                    subrecord('INAM', string('Insignia Unused'))
                ]))
            ),
            subrecord('VEND', ckFormId('Vendor Buy/Sell List', ['FLST'])),
            subrecord('VENC', ckFormId('Merchant Container', ['REFR'])),
            subrecord('VENV', struct('Vendor Values', [
                uint16('Start Hour'),
                uint16('End Hour'),
                uint16('Radius'),
                size(2, bytes('Unknown 1')),
                format(uint8('Only Buys Stolen Items'), enumeration({
                    0: 'False',
                    1: 'True'
                })),
                format(uint8('Not/Sell Buy'), enumeration({
                    0: 'False',
                    1: 'True'
                })),
                size(2, bytes('Unknown 2'))
            ])),
            def('PLVD'),
            def('CITC'),
            def('CTDAsCount')
        ]
    })
};