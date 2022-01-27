let {
    req, def, flags, uint32, format, 
    ckFormId, struct, subrecord, record
} = require('../helpers');

module.exports = () => {
    record('PWAT', 'Placeable Water', {
        members: [
            req(def('EDID')),
            req(def('OBND')),
            req(def('MODL')),
            req(subrecord('DNAM', struct('', [
                format(uint32('Flags'), flags({
                    0: 'Reflects',
                    1: 'Reflects - Actors',
                    2: 'Reflects - Land',
                    3: 'Reflects - LOD Land',
                    4: 'Reflects - LOD Buildings',
                    5: 'Reflects - Trees',
                    6: 'Reflects - Sky',
                    7: 'Reflects - Dynamic Objects',
                    8: 'Reflects - Dead Bodies',
                    9: 'Refracts',
                    10: 'Refracts - Actors',
                    11: 'Refracts - Land',
                    12: '',
                    13: '',
                    14: '',
                    15: '',
                    16: 'Refracts - Dynamic Objects',
                    17: 'Refracts - Dead Bodies',
                    18: 'Silhouette Reflections',
                    19: '',
                    20: '',
                    21: '',
                    22: '',
                    23: '',
                    24: '',
                    25: '',
                    26: '',
                    27: '',
                    28: 'Depth',
                    29: 'Object Texture Coordinates',
                    30: '',
                    31: 'No Underwater Fog'
                })),
                ckFormId('Water', ['WATR'])
            ])))
        ]
    })
};