let {
    newOutput, saveOutput,
    addRequires, addLine, addBlankLine,
    LineExpr, convertStr,
    sigExpr, strExpr
} = require('../output');
let subrecordParsers = require('./subrecordParsers');

let recordOutput;

let newRecordOutput = function(signature, name) {
    recordOutput = newOutput(`${signature}.js`);
    addBlankLine();
    addLine('module.exports = () => {', 1);
    addRequires('addDef', 'record');
    addLine(`addDef(record('${signature}', '${name}', {`, 1);
};

let saveRecordOutput = function() {
    addLine('};', -1);
    saveOutput();
    recordOutput = undefined;
};

let recordParser = {
    name: 'wbRecord',
    expr: LineExpr(`wbRecord\\(${sigExpr}, ${strExpr},`),
    process: function(match) {
        let signature = match[1];
        let name = convertStr(match[2]);
        newRecordOutput(signature, name);
    },
    then: [{
        name: 'wbFlags',
        expr: LineExpr(`wbFlags\\([A-Za-z]+, wbFlagsList\\(\\[`),
        process: function() {
            addLine('flags: {', 1);
        },
        then: [{
            name: 'Flag',
            expr: LineExpr(`\\{(0x[0-9A-F]+)\\}\\s+([0-9]+),\\s+${strExpr},?`),
            process: function(match) {
                let flagName = match[3].replace(/''/g, "\\'"),
                    codeLine = `${match[2]}: '${flagName}',`,
                    commentSpace = ' '.repeat(40 - codeLine.length);
                addLine(`${codeLine + commentSpace}// ${match[1]}`);
            }
        }],
        end: {
            expr: LineExpr(`\\]\\)(, \\[[0-9]+\\])?\\),`),
            process: function() {
                addLine('},', -1);
            }
        }
    }],
    end: {
        name: 'wbRecord Elements',
        expr: LineExpr(`\\[`),
        process: function() {
            addLine(`elements: [`, 1);
        },
        then: subrecordParsers,
        end: {
            expr: LineExpr(`\\], ([^;]+);`),
            process: function() {
                addLine(']', -1);
                addLine('}));', -1);
                saveRecordOutput();
            }
        }
    }
};

module.exports = recordParser;
