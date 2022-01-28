let {
    def, float, struct, subrecord, record
} = require('../helpers');

module.exports = () => {
    record('GDRY', 'God Rays', {
        members: [
            def('EDID'),
            subrecord('DATA', struct('Data', [
                def('FloatColors', { name: 'Back Color' }),
                def('FloatColors', { name: 'Fwd Color' }),
                float('Intensity'),
                float('Air Color - Scale'),
                float('Back Color - Scale'),
                float('Fwd Color - Scale'),
                float('Back Phase'),
                def('FloatColors', { name: 'Air Color' }),
                float('Fwd Phase')
            ]))
        ]
    })
};