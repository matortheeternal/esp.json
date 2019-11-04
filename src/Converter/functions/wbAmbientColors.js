let {subrecordAndField} = require('../converters'),
    {args} = require('../helpers');

subrecordAndField('wbAmbientColors', [
    args.name
], ({sig, name}, converter) => {
    converter.addRequires('def');
    return `def('AmbientColors', { name: ${name} })`;
});
