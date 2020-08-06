let {subrecordAndField} = require('../converters'),
    args = require('../args');

// wbInterface.pas#3335
subrecordAndField('wbStructExSK', [
    args.sk,
    args.exSk,
    args.name,
    args.fields,
    args.priority,
    args.required,
    args.dontShow,
    args.optionalFromElement,
    args.afterLoad,
    args.afterSet,
    args.getCP
], (args, converter) => {
    converter.addRequires('sortKey', 'struct');
    let structDef = `struct(${args.name}, ${args.fields})`;
    return`sortKey(${args.sk}, ${structDef})`;
});
