let {
    def, enumeration, uint8, format, req, 
    struct, subrecord, ckFormId, sorted, memberArray, 
    record
} = require('../helpers');

module.exports = () => {
    record('LTEX', 'Landscape Texture', {
        members: [
            def('EDID'),
            def('ICON'),
            req(subrecord('HNAM', struct('Havok Data', [
                req(format(uint8('Material Type'), enumeration({
                    0: 'STONE',
                    1: 'CLOTH',
                    2: 'DIRT',
                    3: 'GLASS',
                    4: 'GRASS',
                    5: 'METAL',
                    6: 'ORGANIC',
                    7: 'SKIN',
                    8: 'WATER',
                    9: 'WOOD',
                    10: 'HEAVY STONE',
                    11: 'HEAVY METAL',
                    12: 'HEAVY WOOD',
                    13: 'CHAIN',
                    14: 'SNOW'
                }))),
                req(uint8('Friction')),
                req(uint8('Restitution'))
            ]))),
            req(subrecord('SNAM', uint8('Texture Specular Exponent'))),
            sorted(memberArray('Grasses', 
                subrecord('GNAM', ckFormId('Grass', ['GRAS']))
            ))
        ]
    })
};