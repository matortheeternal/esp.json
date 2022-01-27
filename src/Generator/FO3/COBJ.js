let {
    def, int32, float, struct, subrecord, 
    req, record
} = require('../helpers');

module.exports = () => {
    record('COBJ', 'Constructible Object', {
        members: [
            def('EDID'),
            def('OBND'),
            def('FULL'),
            def('MODL'),
            def('ICON'),
            def('SCRI'),
            def('YNAM'),
            def('ZNAM'),
            req(subrecord('DATA', struct('', [
                int32('Value'),
                float('Weight')
            ])))
        ]
    })
};