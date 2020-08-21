let {typeParser} = require('../parsers');

let sigExpr = /^[A-Z]{1}[A-Z0-9_]{3}/,
    specialSigExpr = /^_([0-9A-F]{2}h?)_([A-Z0-9_]{3})/;

let parseSpecialSig = function(match) {
    if (match[2] === '0TX' && match[1][1] === '0' && match[1].length === 2)
        return `\\x3${match[1][0]}${match[2]}`;
    return `\\x${match[1].slice(0, 2)}${match[2]}`;
};

typeParser('signature', {
    test: parser => parser.match(sigExpr) || parser.match(specialSigExpr),
    parse: match => {
        if (match[1]) return parseSpecialSig(match);
        return match[0];
    }
});
