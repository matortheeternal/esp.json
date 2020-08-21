let {
    flags, def, req, uint8, format, 
    subrecord, float, ckFormId, array, opts, 
    record
} = require('../helpers');

module.exports = () => {
    record('IDLM', 'Idle Marker', {
        flags: flags({
            12: 'Ignored',
            29: 'Child Can Use'
        }),
        members: [
            def('EDID'),
            req(def('OBND')),
            subrecord('IDLF', format(uint8('Flags'), flags({
                0: 'Run in Sequence',
                1: 'Unknown 1',
                2: 'Do Once',
                3: 'Unknown 3',
                4: 'Ignored by Sandbox'
            }))),
            subrecord('IDLC', uint8('Animation Count')),
            subrecord('IDLT', float('Idle Timer Setting')),
            opts(subrecord('IDLA', array('Animations', 
                ckFormId('Animation', ['IDLE'])
            )), {
                "afterSet": "IDLAsAfterSet"
            }),
            def('MODL')
        ]
    })
};