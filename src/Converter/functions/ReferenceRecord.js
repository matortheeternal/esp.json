let {functionConverter} = require('../converters'),
    {args, stringify} = require('../helpers');

functionConverter('ReferenceRecord', [
    args.sig,
    args.name
], ({sig, name}, converter) => {
    converter.addRequires('record');
    return `record('${sig}', ${name}, ${stringify({
        id: `'ReferenceRecord'`
    })})`;
});
