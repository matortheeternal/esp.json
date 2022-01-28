let {
    addDef, def, struct
} = require('../../helpers');

module.exports = () => {
    addDef('WeatherColors',
        struct('', [
            def('ByteColors', { name: 'Sunrise' }),
            def('ByteColors', { name: 'Day' }),
            def('ByteColors', { name: 'Sunset' }),
            def('ByteColors', { name: 'Night' })
        ])
    );
};
