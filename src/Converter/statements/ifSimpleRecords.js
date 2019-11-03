let {statementConverter, convertStatement} = require('../converters');

let ifSimpleRecordsExpr = /^if wbSimpleRecords then\s*(begin)?/;

statementConverter('ifSimpleRecords', {
    test: parser => parser.match(ifSimpleRecordsExpr),
    convert: (converter, match) => {
        converter.skipping = true;
        let end = match[1] ? 'end' : 'else';
        while (!converter.chomp(end))
            convertStatement(converter);
        converter.skipping = false;
    }
});
