let {
    flags, def, req, int32, float, 
    struct, subrecord, record
} = require('../helpers');

module.exports = () => {
    record('KEYM', 'Key', {
        flags: flags({
            11: 'Calc Value From Components',
            12: 'Ignored',
            13: 'Pack-In Use Only'
        }),
        members: [
            def('EDID'),
            def('VMAD'),
            req(def('OBND')),
            def('PTRN'),
            req(def('FULL')),
            def('MODL'),
            def('ICON'),
            def('MICO'),
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