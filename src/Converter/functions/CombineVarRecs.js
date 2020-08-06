let {functionConverter} = require('../converters'),
    args = require('../args');

functionConverter('CombineVarRecs', [
    args.identifier,
    args.identifier
], (args, converter) => {
    return Object.assign(
        converter.getData(args.values[0]),
        converter.getData(args.values[1])
    );
});
