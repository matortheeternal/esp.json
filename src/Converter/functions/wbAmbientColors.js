let {subrecordAndField} = require('../converters'),
    args = require('../args');

subrecordAndField('wbAmbientColors', [
    args.name
], ({sig, name}, converter) => {
    converter.addRequires('def');
    return `def('AmbientColors', { name: ${name} })`;
});
