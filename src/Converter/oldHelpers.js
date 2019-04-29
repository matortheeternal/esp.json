let LineExpr = expr => new RegExp(`^\\s*${expr}`);
let convertStr = (str = '') => str.replace(/''/g, "\\'");
let isTrue = str => str && str.match(/true/i);
let processAllowedSigs = str => {
    let sigStrs = str.split(',').map(s => `'${s.trim()}'`);
    return `[${sigStrs.join(', ')}]`;
};
let resolveIntType = (signChar, bits) =>
    signChar === 'U' ? `uint${bits}` : `int${bits}`;

let sigExpr = `([A-Z]{1}[A-Z0-9]{3})`;
let strExpr = `'((?:[^']+|'')*)'`;
let sigArrayExpr = `\\[([^\\]]+)\\]`;
let numExpr = '\\-?[0-9]+';
let numArrayExpr = `(\\[(?:[0-9]+(?:,\\s)?)+\\])`;
let offsetExpr = `\\{(0x[0-9A-F]+)\\}`;
let uintExpr = `itU(8|16|24|32|64)`;
let intTypeExpr = `it(U|S)(8|16|24|32|64)`;
let boolExpr = `(True|true|False|false)`;
let idExpr = `[A-Za-z][A-Za-z0-9]*`;

module.exports = {
    LineExpr, convertStr, isTrue, processAllowedSigs, resolveIntType,
    sigExpr, strExpr, sigArrayExpr, numExpr, numArrayExpr,
    offsetExpr, uintExpr, intTypeExpr, boolExpr, idExpr
};