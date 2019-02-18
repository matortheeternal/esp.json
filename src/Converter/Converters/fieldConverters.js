let { addRequires, addLine } = require('../output');
let {
    LineExpr, convertStr, processAllowedSigs,
    strExpr, sigArrayExpr, uintExpr, intExpr
} = require('../helpers');
let { flagParser } = require('./sharedConverters');

let fieldConverters = [{
    name: 'Unsigned wbInteger Field',
    expr: LineExpr(`wbInteger\\(${strExpr}, ${uintExpr}\\),?`),
    process: function(match) {
        let uintType = `uint${match[2]}`;
        addRequires(uintType);
        let name = convertStr(match[1]);
        addLine(`${uintType}('${name}'),`);
    }
}, {
    name: 'Signed wbInteger Field',
    expr: LineExpr(`wbInteger\\(${strExpr}, ${intExpr}\\),?`),
    process: function(match) {
        let intType = `int${match[2]}`;
        addRequires(intType);
        let name = convertStr(match[1]);
        addLine(`${intType}('${name}'),`);
    }
}, {
    name: 'wbFloat Field',
    expr: LineExpr(`wbFloat\\(${strExpr}\\),?`),
    process: function(match) {
        addRequires('float');
        let name = convertStr(match[1]);
        addLine(`float('${name}'),`);
    }
}, {
    name: 'wbInteger wbFlags Field',
    expr: LineExpr(`wbInteger\\(${strExpr}, ${uintExpr}, wbFlags\\(\\[`),
    process: function(match) {
        let flagsType = `flags${match[2]}`;
        addRequires(flagsType);
        let name = convertStr(match[1]);
        addLine(`${flagsType}('${name}', [`, 1);
    },
    then: [flagParser],
    end: {
        expr: LineExpr(`\\]\\)\\),?`),
        process: function() {
            addLine(']),', -1);
        }
    }
}, {
    name: 'wbFormIDCk Field',
    expr: LineExpr(`wbFormIDCk\\(${strExpr}, ${sigArrayExpr}\\),?`),
    process: function(match) {
        addRequires('ckFormId');
        let name = convertStr(match[1]),
            allowedSigs = processAllowedSigs(match[2]);
        addLine(`ckFormId('${name}', ${allowedSigs}),`);
    }
}, {
    name: 'wbFormID Field',
    expr: LineExpr(`wbFormID\\(${strExpr}\\),?`),
    process: function(match) {
        addRequires('formId');
        let name = convertStr(match[1]);
        addLine(`formId('${name}'),`);
    }
}];

module.exports = fieldConverters;