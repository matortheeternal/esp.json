let {typeParser} = require('../parsers'),
    {convertFunction} = require('../converters');

let fnExpr = /^(\w+)\s*\(/i;

typeParser('function', {
    test: parser => parser.match(fnExpr),
    parse: (match, parser) => {
        parser.next();
        return convertFunction(parser, match[1]);
    }
});
