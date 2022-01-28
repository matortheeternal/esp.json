let {
    def, uint8, format, subrecord, req, 
    ckFormId, struct, record
} = require('../helpers');

module.exports = () => {
    record('IDLE', 'Idle Animation', {
        members: [
            def('EDID'),
            def('MODL'),
            def('CTDAs'),
            req(subrecord('ANAM', format(uint8('Animation Group Section'), def('IdleAnam')))),
            req(subrecord('DATA', struct('Related Idle Animations', [
                ckFormId('Parent', ['IDLE', 'NULL']),
                ckFormId('Previous Sibling', ['IDLE', 'NULL'])
            ])))
        ]
    })
};