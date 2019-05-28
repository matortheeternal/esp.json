let {subrecordAndField} = require('../converters'),
    {reqLine, args} = require('../helpers');

subrecordAndField('wbEmpty', [
    args.name,
    args.identifier,
    args.required,
], ({name}, converter) => {
    converter.addRequires('empty');
    return `empty('${name}')`;
});