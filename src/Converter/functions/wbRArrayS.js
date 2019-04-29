let {addRequires, functionConverter} = require('../converter'),
    {indent, args} = require('../helpers');

functionConverter('wbRArrayS', [
    args.name,
    { type: 'function', id: 'wbStructSK', name: 'struct' }
], ({name, struct}) => {
    addRequires('arrayOfSubrecord');
    return `arrayOfSubrecord('${name}', ${indent(struct)})`;
});