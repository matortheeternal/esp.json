let {
    def, enumeration, uint8, format, subrecord, 
    req, opts, float, record
} = require('../helpers');

module.exports = () => {
    record('GLOB', 'Global', {
        members: [
            def('EDID'),
            opts(req(subrecord('FNAM', format(uint8('Type'), enumeration({
                102: 'Float',
                108: 'Long',
                115: 'Short'
            })))), {
                "defaultValue": "Float"
            }),
            req(subrecord('FLTV', float('Value')))
        ]
    })
};