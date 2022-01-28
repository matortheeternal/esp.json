let {
    def, float, uint16, format, struct, 
    subrecord, ckFormId, record
} = require('../helpers');

module.exports = () => {
    record('BNDS', 'Bendable Spline', {
        members: [
            def('EDID'),
            def('OBND'),
            subrecord('DNAM', struct('Data', [
                float('Default Number of Tiles'),
                uint16('Default Number of Slices'),
                format(uint16('Default Number of Tiles - Relative to Length'), def('BoolEnum')),
                def('FloatColors', { name: 'Default Color' }),
                float('Wind Settings - Sensibility'),
                float('Wind Settings - Flexibility')
            ])),
            subrecord('TNAM', ckFormId('Texture', ['TXST']))
        ]
    })
};