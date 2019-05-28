let {subrecordAndField} = require('../converters'),
    {args} = require('../helpers');

subrecordAndField('wbFormID', [
    args.name,
    args.identifier,
    args.required
], ({name}, converter) => {
    converter.addRequires('formId');
    return `formId('${name}')`;
});