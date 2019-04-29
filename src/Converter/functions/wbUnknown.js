let {addRequires, functionConverter} = require('../../converter'),
    {args} = require('../../helpers');

functionConverter('wbUnknown', [args.sig], ({sig}) => {
    addRequires('subrecord', 'unknown');
    return `subrecord('${sig}', unknown())`;
});