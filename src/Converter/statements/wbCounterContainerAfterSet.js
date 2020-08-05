let {statementConverter, convertFunction} = require('../converters');

let wbCounterContainerAfterSetExpr = /^wbCounterContainerAfterSet\(/;

statementConverter('wbCounterContainerAfterSet', {
    test: parser => parser.match(wbCounterContainerAfterSetExpr),
    convert: converter => {
        convertFunction(converter, 'wbCounterContainerAfterSet');
    }
});