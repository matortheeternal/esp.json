let {functionConverter} = require('../converters'),
    {args, stringify} = require('../helpers');

functionConverter('ReferencedRecord', [
    args.sig,
    args.name
], ({sig, name}, converter) => {
    converter.addRequires('record');
    return `record('${sig}', ${name}, ${stringify({
        def: 'ReferenceRecord'
    })})`;
});
