let {
    addRequires, addLine, addLineReq,
    LineExpr, processAllowedSigs, convertStr,
    sigExpr, strExpr, sigArrayExpr, uintExpr
} = require('../output');
let fieldParsers = require('./fieldParsers');
let { flagParser } = require('./sharedParsers');

let subrecordParsers = [{
    name: 'wbFormIDCk Subrecord',
    expr: LineExpr(`wbFormIDCk\\(${sigExpr}, ${strExpr}, ${sigArrayExpr}\\),?`),
    process: function(match) {
        addRequires('subrecord', 'ckFormId');
        let allowedSigs = processAllowedSigs(match[3]),
            name = convertStr(match[2]),
            def = `ckFormId('${name}', ${allowedSigs})`;
        addLine(`subrecord('${match[1]}', ${def}),`);
    }
}, {
    name: 'wbLString Subrecord',
    expr: LineExpr(`wbLString\\(${sigExpr}, ${strExpr}, [0-9]+, [A-Za-z]+\\),?`),
    process: function(match) {
        addRequires('subrecord', 'lstring');
        let name = convertStr(match[2]),
            def = `lstring('${name}')`;
        addLine(`subrecord('${match[1]}', ${def}),`);
    }
},  {
    name: 'wbString Subrecord',
    expr: LineExpr(`wbString\\(${sigExpr}, ${strExpr}\\),?`),
    process: function(match) {
        addRequires('subrecord', 'zstring');
        let name = convertStr(match[2]),
            def = `zstring('${name}')`;
        addLine(`subrecord('${match[1]}', ${def}),`);
    }
}, {
    name: 'wbUnknown Subrecord',
    expr: LineExpr(`wbUnknown\\(${sigExpr}, [A-Za-z]+, (True|False)\\),?`),
    process: function(match) {
        addRequires('subrecord', 'unknown');
        let def = `unknown()`;
        addLine(`subrecord('${match[1]}', ${def}),`);
    }
}, {
    name: 'wbFloat Subrecord',
    expr: LineExpr(`wbFloat\\(${sigExpr}, ${strExpr}, [A-Za-z]+, (True|False)\\),?`),
    process: function(match) {
        addRequires('subrecord', 'float');
        if (match[3] === 'True') addRequires('req');
        let name = convertStr(match[2]),
            def = `float('${name}')`;
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
        expr: LineExpr(`\\](?:, [A-Za-z]+, (True|False))?\\),?`),
        process: function() {
            addLine('])),', -1);
        }
    }
}, {
    name: 'Flags Subrecord',
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
    name: 'Required Subrecord',
    expr: LineExpr(`wb${sigExpr}Req,?`),
    process: function(match) {
        addRequires('req', 'subrecord');
        addLine(`req(subrecord('${match[1]}')),`);
    }
}, {
    name: 'Subrecord Array',
    expr: LineExpr(`wb([A-Z]{4}s),?`),
    process: function(match) {
        addRequires('subrecordArray');
        addLine(`subrecordArray('${match[1]}', '${match[1]}'),`);
    }
}, {
    name: 'Subrecord',
    expr: LineExpr(`wb${sigExpr},?`),
    process: function(match) {
        addRequires('subrecord');
        addLine(`subrecord('${match[1]}'),`);
    }
}, {
    name: 'Required Def',
    expr: LineExpr(`wb([A-Za-z]+)Req,?`),
    process: function(match) {
        addRequires('req', 'def');
        addLine(`req(def('${match[1]}')),`);
    }
}, {
    name: 'Comment',
    expr: LineExpr(`{[^}]+}`),
    process: () => {}
}];

module.exports = subrecordParsers;