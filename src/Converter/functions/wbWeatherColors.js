let {functionConverter} = require('../converters'),
    {args} = require('../helpers');

functionConverter('wbWeatherColors', [
    args.name
], ({name}, converter) => {
    converter.addRequires('def');
    return `def('WeatherColors', { name: '${name}' })`;
});