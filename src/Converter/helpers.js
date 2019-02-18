let LineExpr = expr => new RegExp(`^\\s*${expr}`);
let convertStr = str => str.replace(/''/g, "\'");
let isTrue = str => str.match(/true/i);
let processAllowedSigs = str => {
    let sigStrs = str.split(',').map(s => `'${s.trim()}'`);
    return `[${sigStrs.join(', ')}]`;
};

let sigExpr = `([A-Z]{4})`;
let strExpr = `'([^']+|'')*'`;
let sigArrayExpr = `\\[([^\\]]+)\\]`;
let numExpr = '[0-9]+';
let uintExpr = `itU(8|16|24|32|64)`;
let intExpr = `itS(8|16|24|32|64)`;
let boolExpr = `(True|true|False|false)`;
let idExpr = `[A-Za-z]+`;

module.exports = {
    LineExpr, convertStr, isTrue, processAllowedSigs,
    sigExpr, strExpr, sigArrayExpr, numExpr,
    uintExpr, intExpr, boolExpr, idExpr
};