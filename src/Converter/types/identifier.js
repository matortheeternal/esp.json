let {typeParser} = require('../parsers');

let idExpr = /^(?!cp)(?:wb)?([A-Za-z0-9_]+)/;

typeParser('identifier', {
    test: parser => parser.match(idExpr),
    parse: match => match[0] === 'nil' ? 'null' : match[1]
});