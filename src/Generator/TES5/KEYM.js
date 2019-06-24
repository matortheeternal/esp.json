let {
    flags, def, req, int32, float, 
    subrecord, struct, record
} = require('../helpers');

module.exports = () => {
    record('KEYM', 'Key', {
        flags: flags({
            2: 'Non-Playable'
        }),
        members: [
            def('EDID'),
            def('VMAD'),
            req(def('OBND')),
            req(def('FULL')),
            def('MODL'),
            def('ICON'),
            def('DEST'),
            def('YNAM'),
            def('ZNAM'),
            def('KSIZ'),
            def('KWDAs'),
            req(subrecord('DATA', struct('', [
                int32('Value'),
                float('Weight')
            ])))
        ]
    })
};