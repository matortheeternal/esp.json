let {typeParser} = require('../parsers');

let strExpr = /^'((?:[^']+|'')*)'/;

typeParser('string', {
    test: parser => parser.match(strExpr),
    parse: match => `'${match[1].replace(/''/g, '\\\'')}'`
});