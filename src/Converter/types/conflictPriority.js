let {typeParser} = require('../parsers');

let cpExpr = /^cp([A-Za-z0-9_]+)/;

typeParser('conflictPriority', {
    test: parser => parser.match(cpExpr),
    parse: match => match[0] === 'nil' ? 'null' : match[1]
});