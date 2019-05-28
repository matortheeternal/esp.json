let {
    def, subrecord, unknown, lstring, ckFormId, 
    uint8, struct, req, record
} = require('../helpers');

module.exports = () => {
    record('FLOR', 'Flora', {
        members: [
            def('EDID'),
            def('VMAD'),
            def('OBNDReq'),
            def('FULLReq'),
            def('MODL'),
            def('DEST'),
            def('KSIZ'),
            def('KWDAs'),
            subrecord('PNAM', unknown()),
            subrecord('RNAM', lstring(Activate Text Override)),
            subrecord('FNAM', unknown()),
            subrecord('PFIG', ckFormId('Ingredient', ['INGR', 'ALCH', 'LVLI', 'MISC', 'NULL'])),
            subrecord('SNAM', ckFormId('Sound', ['SNDR', 'NULL'])),
            req(subrecord('PFPC', struct('Seasonal ingredient production', [
                uint8('Spring'),
                uint8('Summer '),
                uint8('Fall'),
                uint8('Winter')
            ])))
        ]
    })
};