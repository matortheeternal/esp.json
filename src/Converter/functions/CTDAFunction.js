let {functionConverter} = require('../converters');

functionConverter('CTDAFunction', [
    { type: 'keyValuePair', key: 'Index', valueType: 'number', name: 'index' },
    { type: 'keyValuePair', key: 'Name', valueType: 'string', name: 'name' },
    { type: 'keyValuePair', key: 'ParamType1', valueType: 'identifier', name: 'pt1' },
    { type: 'keyValuePair', key: 'ParamType2', valueType: 'identifier', name: 'pt2' },
    { type: 'keyValuePair', key: 'ParamType3', valueType: 'identifier', name: 'pt3' },
], (args, converter, opts) => {
    converter.addRequires('ctdaFunction');
    if (args.pt1) opts.paramType1 = args.pt1;
    if (args.pt2) opts.paramType2 = args.pt2;
    if (args.pt3) opts.paramType3 = args.pt3;
    return `ctdaFunction(${args.index}, ${args.name})`;
});
