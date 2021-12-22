let {subrecordAndField} = require('../converters'),
    args = require('../args');

subrecordAndField('wbLString', [
    args.name,
    args.stringSize,
    args.conflictType,
    args.required,
    args.dontShow,
    args.afterSet,
    args.getCP
], ({name}, converter) => {
    converter.addRequires('localized', 'string');
    return `localized(string(${name}))`;
});
