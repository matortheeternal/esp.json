let {
    addRequires, addLine, addLineReq, reqPrevious
} = require('../output');
let {
    LineExpr, processAllowedSigs, convertStr, isTrue,
    sigExpr, strExpr, sigArrayExpr, uintExpr,
    numExpr, boolExpr, idExpr
} = require('../helpers');
let fieldParsers = require('./fieldConverters');
let { flagParser } = require('./sharedConverters');

let memberConverters = [];
memberConverters.push({
    name: 'wbFormIDCk Subrecord',
    expr: LineExpr(`wbFormIDCk\\(${sigExpr}, ${strExpr}, ${sigArrayExpr}(?:, ${boolExpr}, ${idExpr}, ${boolExpr})?\\),?`),
    process: function(match) {
        addRequires('subrecord', 'ckFormId');
        let allowedSigs = processAllowedSigs(match[3]),
            name = convertStr(match[2]),
            def = `ckFormId('${name}', ${allowedSigs})`;
        addLineReq(match[5], `subrecord('${match[1]}', ${def})`);
    }
}, {
    name: 'wbLString Subrecord',
    expr: LineExpr(`wbLString(?:KC)?\\(${sigExpr}, ${strExpr}, ${numExpr}, ${idExpr}(?:, ${boolExpr}(?:, [A-Za-z\\{\\}]+\\)?)?,?`),
    process: function(match) {
        addRequires('subrecord', 'lstring');
        let name = convertStr(match[2]),
            def = `lstring('${name}')`;
        addLineReq(match[3], `subrecord('${match[1]}', ${def})`);
    }
}, {
    name: 'wbRStruct',
    expr: LineExpr(`wbRStruct\\(${strExpr}, \\[`),
    process: function(match) {
        addRequires('multiStruct');
        let name = convertStr(match[1]);
        addLine(`multiStruct('${name}', [`, 1);
    },
    then: memberConverters,
    end: {
        expr: LineExpr(`\\], [](?:, ${idExpr}, ${boolExpr}, ${idExpr})?`),
        process: function(match) {
            addLine(`]),`);
            if (isTrue(match[1])) reqPrevious();
        }
    }
}, {
    name: 'wbRArrayS wbStructSK',
    expr: LineExpr(`wbRArrayS\\(${strExpr}, wbStructSK\\(${sigExpr}, ${numArrayExpr}, ${strExpr}, \\[`),
    process: function(match) {
        let name = convertStr(match[1]),
            structName = convertStr(match[4]);
        addRequires('arrayOfSubrecord', 'subrecord', 'struct');
        addLine(`arrayOfSubrecord('${name}', ${match[3]}`, 1);
        addLine(`subrecord('${match[2]}', struct('${structName}', [`, 1);
    },
    then: memberConverters,
    end: {
        expr: LineExpr(`\\], ${idExpr}, ${boolExpr}, ${idExpr}, ${numExpr}\\)\\)`),
        process: function(match) {
            addLine(`]))`, -1);
            addLine('),', -1);
            if (isTrue(match[1])) reqPrevious();
        }
    }
}, {
    name: 'wbString Subrecord',
    expr: LineExpr(`wbString\\(${sigExpr}, ${strExpr}(?:, ${numExpr}, ${idExpr})\\),?`),
    process: function(match) {
        addRequires('subrecord', 'zstring');
        let name = convertStr(match[2]),
            def = `zstring('${name}')`;
        addLine(`subrecord('${match[1]}', ${def}),`);
    }
}, {
    name: 'wbUnknown Subrecord',
    expr: LineExpr(`wbUnknown\\(${sigExpr}(?:, ${idExpr}, ${boolExpr})?\\),?`),
    process: function(match) {
        addRequires('subrecord', 'unknown');
        let def = `unknown()`;
        addLineReq(match[2], `subrecord('${match[1]}', ${def})`);
    }
}, {
    name: 'wbFloat Subrecord',
    expr: LineExpr(`wbFloat\\(${sigExpr}, ${strExpr}(?:, ${idExpr}, ${boolExpr})?\\),?`),
    process: function(match) {
        addRequires('subrecord', 'float');
        let name = convertStr(match[2]),
            def = `float('${name}')`;
        addLineReq(match[3], `subrecord('${match[1]}', ${def})`);
    }
}, {
    name: 'wbEmpty Subrecord',
    expr: LineExpr(`wbEmpty\\(${sigExpr}, ${strExpr}(?:, ${idExpr}, ${boolExpr})?\\),?`),
    process: function(match) {
        addRequires('subrecord', 'empty');
        let name = convertStr(match[2]),
            def = `empty('${name}')`;
        addLineReq(match[3], `subrecord('${match[1]}', ${def})`);
    }
}, {
    name: 'wbStruct Subrecord',
    expr: LineExpr(`wbStruct\\(${sigExpr}, ${strExpr}, \\[`),
    process: function(match) {
        addRequires('subrecord', 'struct');
        let name = convertStr(match[2]);
        addLine(`subrecord('${match[1]}', struct('${name}', [`, 1);
    },
    then: fieldParsers,
    end: {
        expr: LineExpr(`\\](?:, ${idExpr}, ${boolExpr})?\\),?`),
        process: function(match) {
            addLine('])),', -1);
            if (isTrue(match[1])) reqPrevious();
        }
    }
}, {
    name: 'wbInteger wbFlags Subrecord',
    expr: LineExpr(`wbInteger\\(${sigExpr}, ${strExpr}, ${uintExpr}, wbFlags\\(\\[`),
    process: function(match) {
        let flagsType = `flags${match[3]}`;
        addRequires(flagsType);
        let name = convertStr(match[2]);
        addLine(`subrecord('${match[1]}', ${flagsType}('${name}', [`, 1);
    },
    then: [flagParser],
    end: {
        expr: LineExpr(`\\]\\)\\),?`),
        process: function() {
            addLine(`])),`, -1);
        }
    }
}, {
    name: 'Required Def',
    expr: LineExpr(`wb(${idExpr})Req,?`),
    process: function(match) {
        addRequires('req', 'def');
        addLine(`req(def('${match[1]}')),`);
    }
}, {
    name: 'Def',
    expr: LineExpr(`wb${idExpr},?`),
    process: function(match) {
        addRequires('def');
        addLine(`def('${match[1]}'),`);
    }
}, {
    name: 'Comment',
    expr: LineExpr(`{[^}]+}`),
    process: () => {}
});

module.exports = memberConverters;