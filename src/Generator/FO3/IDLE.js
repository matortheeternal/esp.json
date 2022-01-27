let {
    def, req, ckFormId, struct, subrecord, 
    uint8, format, bytes, size, int16, 
    flags, record
} = require('../helpers');

module.exports = () => {
    record('IDLE', 'Idle Animation', {
        members: [
            def('EDID'),
            req(def('MODL')),
            def('CTDAs'),
            req(subrecord('ANAM', struct('Related Idle Animations', [
                ckFormId('Parent', ['IDLE', 'NULL']),
                ckFormId('Previous Sibling', ['IDLE', 'NULL'])
            ]))),
            req(subrecord('DATA', struct('', [
                format(uint8('Animation Group Section'), def('IdleAnam')),
                struct('Looping', [
                    uint8('Min'),
                    uint8('Max')
                ]),
                size(1, bytes('Unused')),
                int16('Replay Delay'),
                format(uint8('Flags'), flags({
                    0: 'No attacking'
                })),
                size(1, bytes('Unused'))
            ])))
        ]
    })
};