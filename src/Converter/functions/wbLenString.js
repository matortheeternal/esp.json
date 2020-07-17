let {subrecordAndField} = require('../converters'),
    {args, prefixLine, paddingLine} = require('../helpers');

let prefixSizes = {
    '-5': 4,
    '-3': 2,
    '-2': 1
};

subrecordAndField('wbLenString', [
    args.name,
    args.prefix,
    args.identifier,
    args.required,
    args.identifier,
    args.identifier
], ({name, prefix}, converter) => {
    converter.addRequires('string');
    if (!prefix) prefix = 4;
    let line = paddingLine(prefix, `string(${name})`, converter);
    return prefixLine(prefixSizes[prefix] || prefix, line, converter);
});
