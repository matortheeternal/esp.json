let {
    def, string, subrecord, ckFormId, struct, 
    req, uint8, flags, format, uint16, 
    record
} = require('../helpers');

module.exports = () => {
    record('IDLE', 'Idle Animation', {
        members: [
            def('EDID'),
            def('CTDAs'),
            subrecord('DNAM', string('FileName')),
            subrecord('ENAM', string('Animation Event')),
            req(subrecord('ANAM', struct('Related Idle Animations', [
                ckFormId('Parent', [
                    'AACT', 'IDLE', 'NULL'
                ]),
                ckFormId('Previous Sibling', [
                    'AACT', 'IDLE', 'NULL'
                ])
            ]))),
            req(subrecord('DATA', struct('Data (unused)', [
                struct('Looping seconds (both 255 forever)', [
                    uint8('Min'),
                    uint8('Max')
                ]),
                format(uint8('Flags'), flags({
                    0: 'Parent',
                    1: 'Sequence',
                    2: 'No Attacking',
                    3: 'Blocking'
                })),
                uint8('Animation Group Section'),
                uint16('Replay Delay')
            ])))
        ]
    })
};