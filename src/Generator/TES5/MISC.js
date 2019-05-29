let {
    def, req, int32, float, subrecord, 
    struct, record
} = require('../helpers');

module.exports = () => {
    record('MISC', 'Misc. Item', {
        flags: {
            2: 'Non-Playable'
        },
        members: [
            def('EDID'),
            def('VMAD'),
            req(def('OBND')),
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