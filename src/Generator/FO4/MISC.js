let {
    flags, def, req, formId, subrecord, 
    int32, float, struct, ckFormId, uint32, 
    array, uint8, record
} = require('../helpers');

module.exports = () => {
    record('MISC', 'Misc. Item', {
        flags: flags({
            11: 'Calc From Components',
            12: 'Ignored',
            13: 'Pack-In Use Only'
        }),
        members: [
            def('EDID'),
            def('VMAD'),
            req(def('OBND')),
            def('PTRN'),
            def('FULL'),
            def('MODL'),
            def('ICON'),
            def('MICO'),
            def('DEST'),
            def('YNAM'),
            def('ZNAM'),
            def('KSIZ'),
            def('KWDAs'),
            subrecord('FIMD', formId('Featured Item Message')),
            req(subrecord('DATA', struct('Data', [
                int32('Value'),
                float('Weight')
            ]))),
            subrecord(CVPA, array('Components', 
                struct('Component', [
                    ckFormId('Component', def('sigBaseObjects')),
                    uint32('Count')
                ])
            )),
            subrecord('CDIX', array('Component Display Indices', 
                uint8('Display Index')
            ))
        ]
    })
};