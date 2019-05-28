let {
    def, req, subrecord, uint8, format, 
    float, ckFormId, array, record
} = require('../helpers');

module.exports = () => {
    record('IDLM', 'Idle Marker', {
        flags: {
            "29": "Child Can Use"
        },
        members: [
            def('EDID'),
            req(def('OBND')),
            subrecord('IDLF', format(uint8('Flags'), {
                "0": "Run in Sequence",
                "1": "Unknown 1",
                "2": "Do Once",
                "3": "Unknown 3",
                "4": "Ignored by Sandbox"
            })),
            subrecord('IDLC', uint8('Animation Count')),
            req(subrecord('IDLT', float('Idle Timer Setting'))),
            subrecord('IDLA', array('Animations', ckFormId('Animation', ['IDLE']))),
            def('MODL')
        ]
    })
};