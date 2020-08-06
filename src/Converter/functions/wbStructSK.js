let {subrecordAndField, functionConverter} = require('../converters'),
    args = require('../args');

let convertStructSK = (args, converter) => {
    let {sk, name, fields} = args;
    converter.addRequires('sortKey', 'struct');
    return `sortKey(${sk}, struct(${name}, ${fields}))`;
};

// wbInterface.pas#3279
// wbInterface.pas#3309
subrecordAndField('wbStructSK', [
    args.sk,
    args.name,
    args.fields,
    args.priority,
    args.required,
    args.dontShow,
    args.optionalFromElement,
    args.afterLoad,
    args.afterSet,
    args.getCP
], convertStructSK);

// wbInterface.pas#3291
functionConverter('wbStructSK', [
    args.sk,
    args.name,
    args.fields,
    args.elementMap,
    args.priority,
    args.required,
    args.dontShow,
    args.optionalFromElement,
    args.afterLoad,
    args.afterSet,
    args.getCP
], convertStructSK);
