let {
    def, ckFormId, subrecord, req, uint8, 
    struct, memberArray, record
} = require('../helpers');

module.exports = () => {
    record('LTEX', 'Landscape Texture', {
        members: [
            def('EDID'),
            subrecord('TNAM', ckFormId('Texture Set', ['TXST'])),
            req(subrecord('MNAM', ckFormId('Material Type', ['MATT', 'NULL']))),
            req(subrecord('HNAM', struct('Havok Data', [
                uint8('Friction'),
                uint8('Restitution')
            ]))),
            req(subrecord('SNAM', uint8('Texture Specular Exponent'))),
            memberArray('Grasses', 
                subrecord('GNAM', ckFormId('Grass', ['GRAS']))
            )
        ]
    })
};