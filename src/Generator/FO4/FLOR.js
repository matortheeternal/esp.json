let {
    def, req, unknown, subrecord, localized, 
    string, conflictType, opts, ckFormId, uint8, 
    struct, record
} = require('../helpers');

module.exports = () => {
    record('FLOR', 'Flora', {
        members: [
            def('EDID'),
            def('VMAD'),
            req(def('OBND')),
            def('PTRN'),
            req(def('FULL')),
            def('MODL'),
            def('DEST'),
            def('KSIZ'),
            def('KWDAs'),
            def('PRPS'),
            subrecord('PNAM', unknown()),
            def('ATTX'),
            opts(subrecord('RNAM', conflictType('Translate', localized(string('Activate Text Override')))), {
                "keepCase": true
            }),
            subrecord('FNAM', unknown()),
            subrecord('PFIG', ckFormId('Ingredient', def('sigBaseObjects'))),
            subrecord('SNAM', ckFormId('Harvest Sound', ['SNDR'])),
            req(subrecord('PFPC', struct('Ingredient Production', [
                uint8('Spring'),
                uint8('Summer '),
                uint8('Fall'),
                uint8('Winter')
            ])))
        ]
    })
};