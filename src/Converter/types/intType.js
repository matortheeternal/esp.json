let {typeParser} = require('../parsers');

let intTypeExpr = /^(?:it[US](?:8|16|24|32|64)|it0)/;

typeParser('intType', {
    test: parser => parser.match(intTypeExpr),
    parse: match => match[0]
});