let {statementConverter, convertFunction} = require('../converters');

let makeVarRecsExpr = /^(\w+) := MakeVarRecs\(/;

statementConverter('MakeVarRecs', {
    test: parser => parser.match(makeVarRecsExpr),
    convert: (converter, match) => {
        let name = match[1],
            data = convertFunction(converter, 'MakeVarRecs');
        converter.storeData(name, data);
    }
});
