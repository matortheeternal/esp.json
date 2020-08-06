let {functionConverter} = require('../converters'),
    args = require('../args');

functionConverter('wbWeatherColors', [
    args.name
], (args, converter) => {
    converter.addRequires('def');
    return `def('WeatherColors', { name: ${args.name} })`;
});
