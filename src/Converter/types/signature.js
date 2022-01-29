let {typeParser} = require('../parsers');

let sigExpr = /^[A-Z]{1}[A-Z0-9_]{3}/,
    specialSigExpr = /^_([0-9A-F]{1,2}h?)_([A-Z0-9_]{3})/;

let getCode = function(match) {
    let code = match[1],
        len = code.length;
    if (len === 1) return `0${code}`;
    if (match[2] === '0TX' && code[1] === '0' && len === 2)
        return `3${code[0]}`;
    return code.slice(0, 2);
};

let parseSpecialSig = function(match) {
    return `\\x${getCode(match)}${match[2]}`;
};

typeParser('signature', {
    test: parser => parser.match(sigExpr) || parser.match(specialSigExpr),
    parse: match => {
        if (match[1]) return parseSpecialSig(match);
        return match[0];
    }
});
