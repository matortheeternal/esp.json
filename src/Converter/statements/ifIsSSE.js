let {statementConverter, convertStatement} = require('../converters');

let ifIsSSEExpr = /^if IsSSE then\s*(begin)?/;

statementConverter('ifIsSSE', {
    test: parser => parser.match(ifIsSSEExpr),
    convert: (converter, match) => {
        converter.skipping = converter.gameMode !== 'gmSSE';
        let end = match[1] ? 'end' : ';';
        while (!converter.chomp(end))
            convertStatement(converter);
        converter.skipping = false;
    }
});
