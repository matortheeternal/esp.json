let {statementConverter, convertStatement} = require('../converters');

statementConverter('elseBegin', {
    test: parser => parser.match(/^else begin/),
    convert: (converter) => {
        while (!converter.chomp('end;'))
            convertStatement(converter);
    }
});
