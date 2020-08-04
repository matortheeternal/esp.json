let {subrecordAndField, functionConverter} = require('../converters'),
    {args} = require('../helpers');

subrecordAndField('wbStructSK', [
    args.sk,
    args.name,
    args.fields,
    args.conflictPriority,
    args.boolean,
    args.identifier,
    args.number,
    args.identifier,
    args.identifier,
    args.identifier
], ({sk, name, fields}, converter) => {
    converter.addRequires('sortKey', 'struct');
    return `sortKey(${sk}, struct(${name}, ${fields}))`;
});

functionConverter('wbStructSK', [
    args.sk,
    args.name,
    args.fields,
    args.elementMap,
    args.conflictPriority,
    args.boolean,
    args.identifier,
    args.number,
    args.identifier,
    args.identifier,
    args.identifier
], ({sk, name, fields}, converter) => {
    converter.addRequires('sortKey', 'struct');
    return `sortKey(${sk}, struct(${name}, ${fields}))`;
});