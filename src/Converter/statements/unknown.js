let {statementConverter} = require('../converters');

statementConverter('unknown', {
    test: parser => parser.match(/^(;|[^\s;]+)/)
});
