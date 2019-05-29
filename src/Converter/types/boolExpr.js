let {typeParser} = require('../parsers');

let boolExpr = /^(not|\s+|[a-z][a-z0-9_]*)+/i;

typeParser('boolExpr', {
    test: parser => parser.match(boolExpr),
    parse: match => match[0]
});