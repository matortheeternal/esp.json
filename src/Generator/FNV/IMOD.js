let {
    req, def, uint32, float, struct, 
    subrecord, record
} = require('../helpers');

module.exports = () => {
    record('IMOD', 'Item Mod', {
        members: [
            req(def('EDID')),
            req(def('OBND')),
            def('FULL'),
            def('MODL'),
            def('ICON'),
            def('SCRI'),
            def('DESC'),
            def('DEST'),
            def('YNAM'),
            def('ZNAM'),
            subrecord('DATA', struct('Data', [
                uint32('Value'),
                float('Weight')
            ]))
        ]
    })
};