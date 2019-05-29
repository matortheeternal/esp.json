let {typeParser} = require('../parsers'),
    {convertFunction} = require('../converters');

let fnExpr = /^([a-z][a-z0-9]*)\(/i;

typeParser('function', {
    test: parser => parser.match(fnExpr),
    parse: (match, parser) => {
        parser.next();
        return convertFunction(parser, match[1]);
    }
});