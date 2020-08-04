let {subrecordAndField} = require('../converters'),
    {args} = require('../helpers');

subrecordAndField('wbEmpty', [
    args.name,
    args.conflictPriority,
    args.required,
], ({name}, converter) => {
    converter.addRequires('empty');
    return `empty(${name})`;
});