let {functionConverter} = require('../converters'),
    args = require('../args');

// wbInterface.pas#3455
functionConverter('wbRStructExSK', [
    args.sk,
    args.exSk,
    args.name,
    args.fields,
    args.signatures,
    args.priority,
    args.required,
    args.dontShow,
    args.boolean, // allow unordered
    args.afterLoad,
    args.afterSet,
    args.getCP
], (args, converter) => {
    converter.addRequires('sortKey', 'memberStruct');
    let structDef = `memberStruct(${args.name}, ${args.fields})`;
    return `sortKey(${args.sk}, ${structDef})`;
});
