let {
    addRequires, addLine, addLineReq, reqPrevious
} = require('../output');
let {
    LineExpr, processAllowedSigs, convertStr, isTrue, resolveIntType,
    sigExpr, strExpr, sigArrayExpr, uintExpr, intTypeExpr,
    numExpr, boolExpr, idExpr, numArrayExpr
} = require('../helpers');
let fieldConverters = require('./fieldConverters'),
    { flagConverter, commentConverter } = require('./sharedConverters');

let memberConverters = [];
memberConverters.push({
    name: 'wbFormIDCk Subrecord',
    expr: LineExpr(`wbFormIDC[Kk](?:NoReach)?\\(${sigExpr}, ${strExpr}, ${sigArrayExpr}(?:, ${boolExpr}(?:, ${idExpr}(?:, ${boolExpr})?)?)?\\),?`),
    process: function(match) {
        addRequires('subrecord', 'ckFormId');
        let allowedSigs = processAllowedSigs(match[3]),
            name = convertStr(match[2]),
            def = `ckFormId('${name}', ${allowedSigs})`;
        addLineReq(match[5], `subrecord('${match[1]}', ${def})`);
    }
}, {
    name: 'wbLString Subrecord',
    expr: LineExpr(`wbLString(?:KC)?\\(${sigExpr}, ${strExpr}, ${numExpr}, ${idExpr}(?:, ${boolExpr}(?:, [A-Za-z\\{\\}]+?)?)?\\),?`),
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
        expr: LineExpr(`\\], \\[\\](?:, ${idExpr}(?:, ${boolExpr}(?:, ${idExpr}(?:, ${boolExpr})?)?)?)?\\),?`),
        process: function(match) {
            addLine(`]),`, -1);
            if (isTrue(match[1])) reqPrevious();
        }
    }
}, {
    name: 'wbRArrayS',
    expr: LineExpr(`wbRArrayS\\(${strExpr},`),
    process: function(match) {
        let name = convertStr(match[1]);
        addRequires('arrayOfSubrecord');
        addLine(`arrayOfSubrecord('${name}', `, 1);
    },
    then: memberConverters,
    end: {
        expr: LineExpr(`\\),?`),
        process: function() {
            addLine('),', -1);
        }
    }
}, {
    name: 'wbRArray Def',
    expr: LineExpr(`wbRArray\\(${strExpr}, ${idExpr}, ${idExpr}, ${boolExpr}(?:, ${idExpr}, ${idExpr})?\\),?`),
    process: function(match) {
        let name = convertStr(match[1]),
            refName = match[2].slice(2);
        addRequires('arrayOfStruct', 'def');
        addLineReq(match[4], `arrayOfStruct('${name}', def('${refName}'))`);
    }
}, {
    name: 'wbRArray',
    expr: LineExpr(`wbRArray\\(${strExpr},`),
    process: function(match) {
        let name = convertStr(match[1]);
        addLine(`arrayOfStruct('${name}',`, 1);
    },
    then: memberConverters,
    end: {
        expr: LineExpr('\\),?'),
        process: function() {
            addLine('),', -1);
        }
    }
}, {
    name: 'wbRStructs',
    expr: LineExpr(`wbRStructs\\(${strExpr}, ${strExpr}, \\[`),
    process: function(match) {
        let name = convertStr(match[1]),
            entryName = convertStr(match[2]);
        addLine(`arrayOfStruct('${name}', struct('${entryName}', [`, 1);
    },
    then: memberConverters,
    end: {
        expr: LineExpr(`\\], \\[\\], ${idExpr}, ${boolExpr}\\),?`),
        process: function(match) {
            addLine('])),', -1);
            if (isTrue(match[1])) reqPrevious();
        }
    }
}, {
    name: 'IsSSE',
    expr: LineExpr(`IsSSE\\(`),
    process: function() {
        addRequires('IsSSE');
        addLine('IsSSE(game, [', 1);
    },
    then: memberConverters,
    end: {
        expr: LineExpr(`\\),?`),
        process: function() {
            addLine(']),', -1);
        }
    }
}, {
    name: 'wbArray Subrecord',
    expr: LineExpr(`wbArray\\(${sigExpr}, ${strExpr},`),
    process: function(match) {
        addRequires('subrecord', 'array');
        let name = convertStr(match[2]);
        addLine(`subrecord('${match[1]}', array('${name}',`, 1);
    },
    then: fieldConverters,
    end: {
        expr: LineExpr(`\\),?`),
        process: function() {
            addLine(`)),`, -1);
        }
    }
}, {
    name: 'wbString Subrecord',
    expr: LineExpr(`wbString\\(${sigExpr}, ${strExpr}(?:, ${numExpr}, ${idExpr}(?:, ${boolExpr})?)?\\),?`),
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
    name: 'wbByteArray Subrecord',
    expr: LineExpr(`wbByteArray\\(${sigExpr}, ${strExpr}(?:, ${numExpr}, ${idExpr}, ${boolExpr}, ${boolExpr}, ${idExpr})?\\),?`),
    process: function(match) {
        addRequires('subrecord', 'bytes');
        let name = convertStr(match[2]),
            def = `bytes('${name}')`;
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
    then: fieldConverters,
    end: {
        expr: LineExpr(`\\](?:, ${idExpr}, ${boolExpr}(?:, ${idExpr}, ${numExpr})?)?\\),?`),
        process: function(match) {
            addLine('])),', -1);
            if (isTrue(match[1])) reqPrevious();
        }
    }
}, {
    name: 'wbStructSK Subrecord',
    expr: LineExpr(`wbStructSK\\(${sigExpr}, ${numArrayExpr}, ${strExpr}, \\[`),
    process: function(match) {
        addRequires('subrecord', 'sortKey', 'struct');
        let name = convertStr(match[3]);
        addLine(`subrecord('${match[1]}', sortKey(${match[2]}, struct('${name}', [`, 1);
    },
    then: fieldConverters,
    end: {
        expr: LineExpr(`\\](?:, ${idExpr}, ${boolExpr}, ${idExpr}, ${numExpr}(?:, ${idExpr})?)?\\),?`),
        process: function(match) {
            addLine(']))),', -1);
            if (isTrue(match[1])) reqPrevious();
        }
    }
}, {
    name: 'wbInteger Subrecord',
    expr: LineExpr(`wbInteger\\(${sigExpr}, ${strExpr}, ${intTypeExpr}(?:, (${idExpr}\\(${numExpr}\\)), ${idExpr}, ${boolExpr})?\\),?`),
    process: function(match) {
        let intType = resolveIntType(match[3], match[4]);
        addRequires(intType);
        let name = convertStr(match[2]);
        addLine(`subrecord('${match[1]}', ${intType}('${name}')),`);
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
    then: [flagConverter],
    end: {
        expr: LineExpr(`\\](?:, ${boolExpr})?\\)\\),?`),
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
    expr: LineExpr(`wb([A-Za-z0-9]+),?`),
    process: function(match) {
        addRequires('def');
        addLine(`def('${match[1]}'),`);
    }
}, commentConverter);

module.exports = memberConverters;