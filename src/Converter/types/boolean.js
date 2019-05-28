let {typeParser} = require('../parsers');

let boolExpr = /^(true|false)/i;

typeParser('boolean', {
    test: parser => parser.match(boolExpr),
    parse: match => match[0].toLowerCase()
});