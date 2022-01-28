let {
    def, int32, float, struct, subrecord, 
    req, record
} = require('../helpers');

module.exports = () => {
    record('KEYM', 'Key', {
        members: [
            def('EDID'),
            def('FULL'),
            def('MODL'),
            def('ICON'),
            def('SCRI'),
            req(subrecord('DATA', struct('', [
                int32('Value'),
                float('Weight')
            ])))
        ]
    })
};