let {
    def, ckFormId, subrecord, uint8, struct, 
    req, record
} = require('../helpers');

module.exports = () => {
    record('FLOR', 'Flora', {
        members: [
            def('EDID'),
            def('FULL'),
            def('MODL'),
            def('SCRI'),
            subrecord('PFIG', ckFormId('Ingredient', ['INGR'])),
            req(subrecord('PFPC', struct('Seasonal ingredient production', [
                uint8('Spring'),
                uint8('Summer '),
                uint8('Fall'),
                uint8('Winter')
            ])))
        ]
    })
};