let {statementConverter, convertStatement} = require('../converters');

let ifIsSSEExpr = /^if IsSSE then begin/;

statementConverter('ifIsSSE', {
    test: parser => parser.match(ifIsSSEExpr),
    convert: (converter) => {
        converter.skipping = converter.gameMode !== 'gmSSE';
        let end = 'end';
        while (!converter.chomp(end))
            convertStatement(converter);
        converter.skipping = false;
    }
});
