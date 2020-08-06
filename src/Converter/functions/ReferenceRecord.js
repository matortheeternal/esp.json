let {functionConverter} = require('../converters'),
    {stringify} = require('../helpers'),
    args = require('../args');

functionConverter('ReferenceRecord', [
    args.sig,
    args.name
], ({sig, name}, converter) => {
    converter.addRequires('record');
    return `record('${sig}', ${name}, ${stringify({
        id: `'ReferenceRecord'`
    })})`;
});
