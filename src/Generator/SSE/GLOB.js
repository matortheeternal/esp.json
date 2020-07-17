let {
    flags, def, enumeration, subrecord, uint8, 
    format, opts, float, req, record
} = require('../helpers');

module.exports = () => {
    record('GLOB', 'Global', {
        flags: flags({
            6: 'Constant',
            12: 'Ignored'
        }),
        members: [
            def('EDID'),
            opts(subrecord('FNAM', format(uint8('Type'), enumeration({
                39: 'Float'
            }))), {
                "defaultEditValue": "'Float'"
            }),
            req(subrecord('FLTV', req(float('Value'))))
        ]
    })
};