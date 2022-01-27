let {
    req, def, ckFormId, int8, flags, 
    uint8, format, bytes, size, struct, 
    subrecord, record
} = require('../helpers');

module.exports = () => {
    record('ECZN', 'Encounter Zone', {
        members: [
            req(def('EDID')),
            req(subrecord('DATA', struct('', [
                ckFormId('Owner', [
                    'NPC_', 'FACT', 'NULL'
                ]),
                int8('Rank'),
                int8('Minimum Level'),
                format(uint8('Flags'), flags({
                    0: 'Never Resets',
                    1: 'Match PC Below Minimum Level'
                })),
                size(1, bytes('Unused'))
            ])))
        ]
    })
};