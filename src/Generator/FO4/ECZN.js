let {
    def, ckFormId, int8, flags, uint8, 
    format, struct, subrecord, req, record
} = require('../helpers');

module.exports = () => {
    record('ECZN', 'Encounter Zone', {
        members: [
            def('EDID'),
            req(subrecord('DATA', struct('', [
                ckFormId('Owner', [
                    'NPC_', 'FACT', 'NULL'
                ]),
                ckFormId('Location', ['LCTN', 'NULL']),
                int8('Rank'),
                int8('Min Level'),
                format(uint8('Flags'), flags({
                    0: 'Never Resets',
                    1: 'Match PC Below Minimum Level',
                    2: 'Disable Combat Boundary',
                    3: 'Workshop'
                })),
                int8('Max Level')
            ])))
        ]
    })
};