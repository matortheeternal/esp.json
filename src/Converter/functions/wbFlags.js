let {functionConverter} = require('../converters'),
    {stringify} = require('../helpers'),
    args = require('../args');

let convertFlags = ({flags}, converter) => {
    if (typeof flags === 'string') return flags;
    converter.addRequires('flags');
    return `flags(${stringify(flags)})`;
};

// inherit flags
functionConverter('wbFlags', [
    args.identifier,
    args.flagsField,
    args.boolean // aUnknownIsUnused
], convertFlags);

// TODO: handle flagsToIgnore ?
functionConverter('wbFlags', [
    args.identifier,
    args.flagsField,
    args.flagsToIgnore
], convertFlags);

// new flags
functionConverter('wbFlags', [
    args.flagsField,
    args.boolean // aUnknownIsUnused
], convertFlags);

functionConverter('wbFlags', [
    args.flagsField,
    args.flagsToIgnore
], convertFlags);
