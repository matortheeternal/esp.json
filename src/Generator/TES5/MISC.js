let {
    def, int32, float, subrecord, struct, 
    req, record
} = require('../helpers');

module.exports = () => {
    record('MISC', 'Misc. Item', {
        flags: {
            "2": "Non-Playable"
        },
        members: [
            def('EDID'),
            def('VMAD'),
            def('OBNDReq'),
            def('FULL'),
            def('MODL'),
            def('ICON'),
            def('DEST'),
            def('YNAM'),
            def('ZNAM'),
            def('KSIZ'),
            def('KWDAs'),
            req(subrecord('DATA', struct('Data', [
                int32('Value'),
                float('Weight')
            ])))
        ]
    })
};