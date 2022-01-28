let {
    def, flags, uint8, format, subrecord, 
    req, float, int32, string, conflictType, 
    memberArray, sortKey, memberStruct, record
} = require('../helpers');

module.exports = () => {
    record('FACT', 'Faction', {
        members: [
            def('EDID'),
            def('FULL'),
            def('XNAMs'),
            req(subrecord('DATA', format(uint8('Flags'), flags({
                0: 'Hidden from Player',
                1: 'Evil',
                2: 'Special Combat'
            })))),
            req(subrecord('CNAM', float('Crime Gold Multiplier'))),
            memberArray('Ranks', 
                sortKey([0], memberStruct('Rank', [
                    subrecord('RNAM', int32('Rank#')),
                    subrecord('MNAM', conflictType('Translate', string('Male'))),
                    subrecord('FNAM', conflictType('Translate', string('Female'))),
                    subrecord('INAM', string('Insignia'))
                ]))
            )
        ]
    })
};