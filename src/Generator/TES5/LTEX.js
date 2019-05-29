let {
    def, subrecord, ckFormId, req, uint8, 
    struct, arrayOfSubrecord, IsSSE, uint32, format, 
    record
} = require('../helpers');

module.exports = game => {
    record('LTEX', 'Landscape Texture', {
        members: [
            def('EDID'),
            req(subrecord('TNAM', ckFormId('Texture Set', ['TXST']))),
            req(subrecord('MNAM', ckFormId('Material Type', ['MATT', 'NULL']))),
            req(subrecord('HNAM', struct('Havok Data', [
                uint8('Friction'),
                uint8('Restitution')
            ]))),
            subrecord('SNAM', uint8('Texture Specular Exponent')),
            arrayOfSubrecord('Grasses', 
                subrecord('GNAM', ckFormId('Grass', ['GRAS']))
            ),
            subrecord('INAM', format(uint32(IsSSE(game, ['Flags', 'Unused'])), {
                0: 'Is Snow'
            }))
        ]
    })
};