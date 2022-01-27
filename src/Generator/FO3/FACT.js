let {
    req, def, flags, uint8, format, 
    bytes, size, struct, subrecord, float, 
    int32, string, conflictType, memberArray, sortKey, 
    memberStruct, record
} = require('../helpers');

module.exports = () => {
    record('FACT', 'Faction', {
        members: [
            req(def('EDID')),
            def('FULL'),
            def('XNAMs'),
            req(subrecord('DATA', struct('', [
                format(uint8('Flags 1'), flags({
                    0: 'Hidden from PC',
                    1: 'Evil',
                    2: 'Special Combat'
                })),
                format(uint8('Flags 2'), flags({
                    0: 'Track Crime',
                    1: 'Allow Sell'
                })),
                size(2, bytes('Unused'))
            ]))),
            subrecord('CNAM', float('Unused')),
            memberArray('Ranks', 
                sortKey([0], memberStruct('Rank', [
                    subrecord('RNAM', int32('Rank#')),
                    subrecord('MNAM', conflictType('Translate', string('Male'))),
                    subrecord('FNAM', conflictType('Translate', string('Female'))),
                    subrecord('INAM', string('Insignia (Unused)'))
                ]))
            )
        ]
    })
};