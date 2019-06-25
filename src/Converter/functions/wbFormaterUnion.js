let {functionConverter} = require('../converters'),
    {args} = require('../helpers');

functionConverter('wbFormaterUnion', [
    args.identifier,
    args.arrayOfFlags
], (args, converter) => {
    converter.addRequires('formatUnion');
    let [decider, flags] = args.values;
    return `formatUnion('${decider}', ${flags})`;
});
