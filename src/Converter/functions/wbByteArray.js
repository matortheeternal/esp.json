let {subrecordAndField} = require('../converters'),
    {prefixLine, sizeLine, args} = require('../helpers');

let prefixes = {
    '-1': 4,
    '-2': 2,
    '-4': 1
};

subrecordAndField('wbByteArray', [
    args.name,
    args.size,
    args.identifier,
    args.boolean,
    args.identifier,
    args.identifier
], ({name, size}, converter) => {
    converter.addRequires('bytes');
    let prefix = prefixes[size] || 0,
        line = sizeLine(size, `bytes(${name})`, converter);
    return prefixLine(prefix, line, converter);
});
