let {statementConverter} = require('../converters');

statementConverter('begin', {
    test: parser => parser.match(/^begin.+?end;/)
});