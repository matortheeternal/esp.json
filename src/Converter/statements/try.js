let {statementConverter} = require('../converters');

statementConverter('try', {
    test: parser => parser.match(/^try.+?end;/)
});