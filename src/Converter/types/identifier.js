let {typeParser} = require('../parsers');

let idExpr = /^(?:wb)?([a-z][a-z0-9_]*)/i;

typeParser('identifier', {
    test: parser => parser.match(idExpr),
    parse: match => match[0] === 'nil' ? 'null' : match[1]
});