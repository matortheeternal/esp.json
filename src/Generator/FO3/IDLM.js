let {
    req, def, flags, uint8, format, 
    subrecord, bytes, size, struct, float, 
    ckFormId, array, opts, record
} = require('../helpers');

module.exports = () => {
    record('IDLM', 'Idle Marker', {
        members: [
            req(def('EDID')),
            req(def('OBND')),
            req(subrecord('IDLF', format(uint8('Flags'), flags({
                0: 'Run in Sequence',
                1: '',
                2: 'Do Once'
            })))),
            req(subrecord('IDLC', struct('', [
                uint8('Animation Count'),
                size(3, bytes('Unused'))
            ]))),
            req(subrecord('IDLT', float('Idle Timer Setting'))),
            opts(req(subrecord('IDLA', array('Animations', 
                ckFormId('Animation', ['IDLE', 'NULL'])
            ))), {
                "afterSet": "IDLAsAfterSet"
            })
        ]
    })
};