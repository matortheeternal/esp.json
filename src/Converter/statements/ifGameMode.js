let {statementConverter, convertStatement} = require('../converters');

let ifGameModeExpr = /^if wbGameMode = (\w+) then\s*(begin)?/;

statementConverter('ifGameMode', {
    test: parser => parser.match(ifGameModeExpr),
    convert: (converter, match) => {
        converter.skipping = converter.gameMode !== match[1];
        let endExpr = match[2] ? /^end;?/ : /^;/;
        while (!converter.match(endExpr))
            convertStatement(converter);
        converter.skipping = false;
    }
});
