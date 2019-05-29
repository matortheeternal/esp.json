let {
    def, ckFormId, int8, uint8, format, 
    subrecord, struct, req, record
} = require('../helpers');

module.exports = () => {
    record('ECZN', 'Encounter Zone', {
        members: [
            def('EDID'),
            req(subrecord('DATA', struct('', [
                ckFormId('Owner', [
                    'NPC_',    'FACT',    'NULL'
                ]),
                ckFormId('Location', ['LCTN', 'NULL']),
                int8('Rank'),
                int8('Min Level'),
                format(uint8('Flags'), {
                    0: 'Never Resets',
                    1: 'Match PC Below Minimum Level',
                    2: 'Disable Combat Boundary'
                }),
                int8('Max Level')
            ])))
        ]
    })
};