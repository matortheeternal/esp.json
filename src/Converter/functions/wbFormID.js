let {subrecordAndField} = require('../converters'),
    {args} = require('../helpers');

subrecordAndField('wbFormID', [
    args.name,
    args.conflictPriority,
    args.required
], ({name}, converter) => {
    converter.addRequires('formId');
    return `formId(${name})`;
});