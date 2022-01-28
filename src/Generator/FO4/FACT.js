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
                    16: 'Ignore Crimes: Werewolf (unused)'
                }))
            ]))),
            subrecord('JAIL', ckFormId('Exterior Jail Marker', ['REFR'])),
            subrecord('WAIT', ckFormId('Follower Wait Marker', ['REFR'])),
            subrecord('STOL', ckFormId('Stolen Goods Container', ['REFR'])),
            subrecord('PLCN', ckFormId('Player Inventory Container', ['REFR'])),
            subrecord('CRGR', ckFormId('Shared Crime Faction List', ['FLST'])),
            subrecord('JOUT', ckFormId('Jail Outfit', ['OTFT'])),
            subrecord('CRVA', struct('Crime Values', [
                format(uint8('Arrest'), def('BoolEnum')),
                format(uint8('Attack On Sight'), def('BoolEnum')),
                uint16('Murder'),
                uint16('Assault'),
                uint16('Trespass'),
                uint16('Pickpocket'),
                uint16('Unknown'),
                float('Steal Multiplier'),
                uint16('Escape'),
                uint16('Werewolf (unused)')
            ])),
            memberArray('Ranks', 
                sortKey([0], memberStruct('Rank', [
                    subrecord('RNAM', uint32('Rank#')),
                    subrecord('MNAM', conflictType('Translate', localized(string('Male Title')))),
                    subrecord('FNAM', conflictType('Translate', localized(string('Female Title')))),
                    subrecord('INAM', string('Insignia (unused)'))
                ]))
            ),
            subrecord('VEND', ckFormId('Vendor Buy/Sell List', ['FLST'])),
            subrecord('VENC', ckFormId('Merchant Container', ['REFR'])),
            subrecord('VENV', struct('Vendor Values', [
                uint16('Start Hour'),
                uint16('End Hour'),
                uint16('Radius'),
                size(2, bytes('Unknown 1')),
                format(uint8('Buys Stolen Items'), def('BoolEnum')),
                format(uint8('Buy/Sell Everything Not In List?'), def('BoolEnum')),
                format(uint8('Buys NonStolen Items'), def('BoolEnum')),
                uint8('Unknown')
            ])),
            def('PLVD'),
            def('CITC'),
            def('CTDAsCount')
        ]
    })
};