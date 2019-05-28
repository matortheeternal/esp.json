let {typeParser} = require('../parsers');

typeParser('stringExpr', {
    skipAdvance: true,
    test: parser => parser.matchOne(['string', 'function']),
    parse: match => match.value
});