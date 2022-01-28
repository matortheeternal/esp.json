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
                0: 'Unknown',
                98: 'Boolean',
                102: 'Float',
                108: 'Long',
                115: 'Short'
            })))), {
                "defaultEditValue": "Float"
            }),
            req(subrecord('FLTV', float('Value')))
        ]
    })
};