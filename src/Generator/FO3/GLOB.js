let {
    req, def, enumeration, uint8, format, 
    subrecord, opts, float, record
} = require('../helpers');

module.exports = () => {
    record('GLOB', 'Global', {
        members: [
            req(def('EDID')),
            opts(req(subrecord('FNAM', format(uint8('Type'), enumeration({
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