let {typeParser} = require('../parsers');

let sigExpr = /^[A-Z]{1}[A-Z0-9_]{3}/,
    specialSigExpr = /^_([0-9A-F]{2})h?_([A-Z0-9_]{3})/;

let parseSpecialSig = function(match) {
    return `\\x${match[1]}${match[2]}`;
};

typeParser('signature', {
    test: parser => parser.match(sigExpr) || parser.match(specialSigExpr),
    parse: match => {
        if (match[1]) return parseSpecialSig(match);
        return match[0];
    }
});