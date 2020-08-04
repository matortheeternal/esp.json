let {typeParser} = require('../parsers');

let mathExpr = /^(-?[0-9]+(?:\.[0-9]+)?|[\/*+-]|[A-Za-z]+)+/,
    numberExpr = /^-?[0-9]+(?:\.[0-9]+)?$/;

let signNames = {
    '/': 'Div',
    '*': 'Mult',
    '+': 'Plus',
    '-': 'Minus'
};

let buildIdentifier = function(str) {
    return str.replace(/[\/*+-]/g, m => {
        return signNames[m[0]];
    }).replace(/wb/g, '');
};

class MathExpr {
    constructor(str) {
        this.type = numberExpr.test(str) ? 'number' : 'identifier';
        this.str = this.type === 'number' ? str : buildIdentifier(str);
    }

    toString() {
        return this.str;
    }
}

typeParser('mathExpr', {
    test: parser => parser.match(mathExpr),
    parse: match => {
        return new MathExpr(match[0]);
    }
});
