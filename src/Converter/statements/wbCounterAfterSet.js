let {statementConverter, convertFunction} = require('../converters');

let wbCounterAfterSetExpr = /^wbCounterAfterSet\(/;

statementConverter('wbCounterAfterSet', {
    test: parser => parser.match(wbCounterAfterSetExpr),
    convert: converter => {
        convertFunction(converter, 'wbCounterAfterSet');
    }
});