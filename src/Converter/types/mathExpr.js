let {typeParser} = require('../parsers');

let mathExpr = /^(-?[0-9]+(?:\.[0-9]+)?|[\/*+-]|[A-Za-z]+)+/,
    numberExpr = /^-?[0-9]+(?:\.[0-9]+)?/;

let signNames = {
    '/': 'Div',
    '*': 'Mult',
    '+': 'Plus',
    '-': 'Minus'
};

typeParser('mathExpr', {
    test: parser => parser.match(mathExpr) || parser.match(numberExpr),
    parse: match => {
        if (numberExpr.test(match[0])) return match[0];
        let identifierName = match[0].replace(/[\/*+-]/g, m => {
            return signNames[m[0]];
        });
        return `'${identifierName}'`;
    }
});
