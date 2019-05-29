let {typeParser} = require('../parsers');

let numberExpr = /^-?[0-9]+(?:\.[0-9]+)?/,
    hexExpr = /^\$([0-9A-Fa-f]+)/;

typeParser('number', {
    test: parser => {
        return parser.match(numberExpr) ||
            parser.match(hexExpr);
    },
    parse: match => {
        if (match[1]) return parseInt(match[1], 16);
        return parseInt(match[0]);
    }
});