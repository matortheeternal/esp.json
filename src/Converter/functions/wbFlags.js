let {functionConverter} = require('../converters'),
    {args, stringify} = require('../helpers');

let convertFlags = ({flags}) => stringify(flags);

// inherit flags
functionConverter('wbFlags', [
    args.identifier,
    { type: 'flagsField', name: 'flags' },
    { type: 'boolean', name: 'unused' }
], convertFlags);

// TODO: handle flagsToIgnore ?
functionConverter('wbFlags', [
    args.identifier,
    { type: 'flagsField', name: 'flags' },
    { type: 'array of number', name: 'flagsToIgnore' }
], convertFlags);

// new flags
functionConverter('wbFlags', [
    { type: 'flagsField', name: 'flags' },
    { type: 'boolean', name: 'unused' }
], convertFlags);

functionConverter('wbFlags', [
    { type: 'flagsField', name: 'flags' },
    { type: 'array of number', name: 'flagsToIgnore' }
], convertFlags);