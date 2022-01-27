let {
    req, def, int32, float, struct, 
    subrecord, ckFormId, record
} = require('../helpers');

module.exports = () => {
    record('KEYM', 'Key', {
        members: [
            req(def('EDID')),
            req(def('OBND')),
            req(def('FULL')),
            def('MODL'),
            req(def('ICON')),
            def('SCRI'),
            def('DEST'),
            def('YNAM'),
            def('ZNAM'),
            req(subrecord('DATA', struct('', [
                int32('Value'),
                float('Weight')
            ]))),
            subrecord('RNAM', ckFormId('Sound - Random/Looping', ['SOUN']))
        ]
    })
};