let { addRequires, addLine, addLineReq } = require('../output');
let {
    LineExpr, convertStr, processAllowedSigs, resolveIntType,
    strExpr, sigArrayExpr, uintExpr, intTypeExpr,
    idExpr, boolExpr, numExpr
} = require('../helpers');
let {
    flagConverter, enumConverter, commentConverter
} = require('./sharedConverters');

let fieldConverters = [];
fieldConverters.push({
    name: 'wbUnion Field',
    expr: LineExpr(`wbUnion\\(${strExpr}, (${idExpr}), \\[`),
    process: function(match) {
        let name = convertStr(match[1]),
            decider = match[2].slice(2);
        addRequires('union');
        addLine(`union('${name}', '${decider}', [`, 1);
    },
    then: fieldConverters,
    end: {
        expr: LineExpr(`\\]\\),?`),
        process: function() {
            addLine(`]),`, -1);
        }
    }
}, {
    name: 'wbInteger Enum Ref',
    expr: LineExpr(`wbInteger\\(${strExpr}, ${intTypeExpr}, wb([A-Za-z]+Enum)\\),?`),
    process: function(match) {
        let name = convertStr(match[1]),
            enumType = `enum${match[2] === 'S' ? 'S' : ''}${match[3]}`;
        addRequires(enumType, 'def');
        addLine(`${enumType}('${name}', def('${match[4]}')),`);
    }
}, {
    name: 'wbInteger Field',
    expr: LineExpr(`wbInteger\\(${strExpr}, ${intTypeExpr}(?:, ${idExpr}, ${idExpr}(?:, (?:${idExpr}, )?${boolExpr}, ${idExpr}, ${idExpr}(?:, ${numExpr})?)?)?\\),?`),
    process: function(match) {
        let intType = resolveIntType(match[2], match[3]);
        addRequires(intType);
        let name = convertStr(match[1]);
        addLine(`${intType}('${name}'),`);
    }
}, {
    name: 'wbFloat Field',
    expr: LineExpr(`wbFloat\\(${strExpr}(?:, ${idExpr}, ${boolExpr})?\\),?`),
    process: function(match) {
        addRequires('float');
        let name = convertStr(match[1]);
        addLineReq(match[2], `float('${name}')`);
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
    then: [flagConverter],
    end: {
        expr: LineExpr(`\\]\\)\\),?`),
        process: function() {
            addLine(']),', -1);
        }
    }
},  {
    name: 'wbInteger Enum',
    expr: LineExpr(`wbInteger\\(${strExpr}, ${intTypeExpr},`),
    process: function(match) {
        let name = convertStr(match[1]),
            enumType = `enum${match[2] === 'S' ? 'S' : ''}${match[3]}`;
        addRequires(enumType);
        addLine(`${enumType}('${name}', [`, 1);
    },
    then: [enumConverter],
    end: {
        expr: LineExpr(`(?:, ${idExpr}, ${boolExpr}, ${idExpr}, ${idExpr})?\\),?`),
        process: function() {
            addLine(`]),`, -1);
        }
    }
}, {
    name: 'wbByteArray Field',
    expr: LineExpr(`wbByteArray\\(${strExpr}(?:, (${numExpr})(?:, ${idExpr}(?:, ${boolExpr}, ${idExpr})?)?)?\\),?`),
    process: function(match) {
        addRequires('bytes');
        let name = convertStr(match[1]),
            secondArg = match[2] ? `, ${match[2]}` : '';
        addLineReq(match[4], `bytes('${name}'${secondArg})`);
    }
}, {
    name: 'wbByteColors Field',
    expr: LineExpr(`wbByteColors\\(${strExpr}\\),?`),
    process: function(match) {
        addRequires('namedDef');
        let name = convertStr(match[1]);
        addLine(`namedDef('${name}', 'ByteColors'),`);
    }
}, {
    name: 'wbFormIDCk Field',
    expr: LineExpr(`wbFormIDCk(?:NoReach)?\\(${strExpr}, ${sigArrayExpr}(?:, ${sigArrayExpr}|, ${boolExpr})?\\),?`),
    process: function(match) {
        addRequires('ckFormId');
        let name = convertStr(match[1]),
            allowedSigs = processAllowedSigs(match[2]);
        addLine(`ckFormId('${name}', ${allowedSigs}),`);
    }
}, {
    name: 'wbFormID Field',
    expr: LineExpr(`wbFormID(?:NoReach)?\\(${strExpr}\\),?`),
    process: function(match) {
        addRequires('formId');
        let name = convertStr(match[1]);
        addLine(`formId('${name}'),`);
    }
}, commentConverter);

module.exports = fieldConverters;