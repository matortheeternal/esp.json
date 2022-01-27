let {
    req, def, ckFormId, subrecord, enumeration, 
    uint8, format, struct, sorted, memberArray, 
    record
} = require('../helpers');

module.exports = () => {
    record('LTEX', 'Landscape Texture', {
        members: [
            req(def('EDID')),
            def('ICON'),
            req(subrecord('TNAM', ckFormId('Texture', ['TXST']))),
            req(subrecord('HNAM', struct('Havok Data', [
                format(uint8('Material Type'), enumeration({
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
                    14: 'SNOW',
                    15: 'ELEVATOR',
                    16: 'HOLLOW METAL',
                    17: 'SHEET METAL',
                    18: 'SAND',
                    19: 'BRIKEN CONCRETE',
                    20: 'VEHILCE BODY',
                    21: 'VEHILCE PART SOLID',
                    22: 'VEHILCE PART HOLLOW',
                    23: 'BARREL',
                    24: 'BOTTLE',
                    25: 'SODA CAN',
                    26: 'PISTOL',
                    27: 'RIFLE',
                    28: 'SHOPPING CART',
                    29: 'LUNCHBOX',
                    30: 'BABY RATTLE',
                    31: 'RUBER BALL'
                })),
                uint8('Friction'),
                uint8('Restitution')
            ]))),
            req(subrecord('SNAM', uint8('Texture Specular Exponent'))),
            sorted(memberArray('Grasses', 
                subrecord('GNAM', ckFormId('Grass', ['GRAS']))
            ))
        ]
    })
};