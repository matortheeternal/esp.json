let {
    flags, def, float, struct, subrecord, 
    req, record
} = require('../helpers');

module.exports = () => {
    record('TRNS', 'Transform', {
        flags: flags({
            12: 'Ignored',
            16: 'Around Origin'
        }),
        members: [
            def('EDID'),
            req(subrecord('DATA', struct('Data', [
                def('PosRot'),
                float('Scale'),
                float('Zoom Min'),
                float('Zoom Max')
            ])))
        ]
    })
};