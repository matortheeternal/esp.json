let {functionConverter} = require('../converters'),
    {args} = require('../helpers');

functionConverter('wbFormaterUnion', [
    args.identifier,
    args.arrayOfFlags
], ([decider, flags], converter) => {
    converter.addRequires('formatUnion');
    return `formatUnion('${decider}', ${flags})`;
});
