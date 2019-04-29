let {addRequires, functionConverter} = require('../../converter'),
    {reqLine, arr, args} = require('../../helpers');

functionConverter('wbRStruct', [
    args.name,
    args.members,
    { type: 'array of signature' },
    args.identifier,
    args.required,
    args.identifier
], ({name, members, required}) => {
    addRequires('multiStruct');
    return reqLine(required, `multiStruct(${name}, ${arr(members)})`);
});