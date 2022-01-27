let {
    req, def, float, subrecord, int32, 
    flags, uint8, format, bytes, size, 
    struct, record
} = require('../helpers');

module.exports = () => {
    record('INGR', 'Ingredient', {
        members: [
            req(def('EDID')),
            req(def('OBND')),
            def('FULL'),
            def('MODL'),
            def('ICON'),
            def('SCRI'),
            req(def('ETYP')),
            req(subrecord('DATA', float('Weight'))),
            req(subrecord('ENIT', struct('Effect Data', [
                int32('Value'),
                format(uint8('Flags'), flags({
                    0: 'No auto-calculation',
                    1: 'Food item'
                })),
                size(3, bytes('Unused'))
            ]))),
            req(def('Effects'))
        ]
    })
};