let {
    newOutput, saveOutput, addRequires, addLine, addBlankLine
} = require('../output');
let {
    LineExpr, convertStr, sigExpr, strExpr
} = require('../helpers');
let memberParsers = require('./memberConverters');

let newRecordOutput = function(signature, name) {
    newOutput(`${signature}.js`);
    addBlankLine();
    addLine('module.exports = () => {', 1);
    addRequires('addDef', 'record');
    addLine(`addDef(record('${signature}', '${name}', {`, 1);
};

let saveRecordOutput = function() {
    addLine('};', -1);
    saveOutput();
};

let recordConverter = {
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
                let flagName = match[3].replace(/''/g, "\\'");
                addLine(`${match[2]}: '${flagName}',`);
                addComment(match[1]);
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
        then: memberParsers,
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

module.exports = recordConverter;
