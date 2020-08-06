let {
    flags, def, enumeration, uint8, format, 
    subrecord, req, opts, float, record
} = require('../helpers');

module.exports = () => {
    record('GLOB', 'Global', {
        flags: flags({
            6: 'Constant',
            12: 'Ignored'
        }),
        members: [
            def('EDID'),
            opts(req(subrecord('FNAM', format(uint8('Type'), enumeration({
                39: 'Float'
            })))), {
                "defaultEditValue": "Float"
            }),
            req(subrecord('FLTV', float('Value')))
        ]
    })
};