let {
    def, req, uint32, float, struct, 
    subrecord, record
} = require('../helpers');

module.exports = () => {
    record('SCRL', 'Scroll', {
        members: [
            def('EDID'),
            req(def('OBND')),
            def('FULL'),
            def('KSIZ'),
            def('KWDAs'),
            def('MDOB'),
            def('ETYP'),
            def('DESC'),
            def('MODL'),
            def('DEST'),
            def('YNAM'),
            def('ZNAM'),
            req(subrecord('DATA', struct('Item', [
                uint32('Value'),
                float('Weight')
            ]))),
            def('SPIT'),
            req(def('Effects'))
        ]
    })
};