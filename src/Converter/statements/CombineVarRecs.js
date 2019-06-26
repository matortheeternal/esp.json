let {statementConverter, convertFunction} = require('../converters');

let combineVarRecsExpr = /^(\w+) := CombineVarRecs\(/;

statementConverter('CombineVarRecs', {
    test: parser => parser.match(combineVarRecsExpr),
    convert: (converter, match) => {
        let name = match[1],
            data = convertFunction(converter, 'CombineVarRecs');
        converter.storeData(name, data);
    }
});
