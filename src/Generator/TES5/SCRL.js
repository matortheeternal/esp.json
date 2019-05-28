let {
    def, uint32, float, subrecord, struct, 
    req, record
} = require('../helpers');

module.exports = () => {
    record('SCRL', 'Scroll', {
        members: [
            def('EDID'),
            def('OBNDReq'),
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
            def('EffectsReq')
        ]
    })
};