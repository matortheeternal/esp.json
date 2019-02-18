let {
    newOutput, saveOutput, addRequires, addLine,
    addBlankLine, addComment,
} = require('../output');
let {
    LineExpr, convertStr,
    sigExpr, strExpr, numExpr, boolExpr,
    idExpr, numArrayExpr, offsetExpr
} = require('../helpers');
let memberParsers = require('./memberConverters');

let newRecordOutput = function(signature, name) {
    newOutput(`${signature}.js`);
    addBlankLine();
    addLine('module.exports = game => {', 1);
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
        expr: LineExpr(`wbFlags\\(${idExpr}, wbFlagsList\\(\\[`),
        process: function() {
            addLine('flags: {', 1);
        },
        then: [{
            name: 'Flag',
            expr: LineExpr(`${offsetExpr}\\s+(${numExpr}), ${strExpr},?(?:\\s+//[^\\n]+)?`),
            process: function(match) {
                let flagName = convertStr(match[3]);
                addLine(`${match[2]}: '${flagName}',`);
                addComment(match[1]);
            }
        }],
        end: {
            expr: LineExpr(`\\](?:, ${boolExpr}, ${boolExpr})?\\)(?:, ${numArrayExpr})?\\),`),
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
            expr: LineExpr(`\\](?:, [^\\)]+)?\\);`),
            process: function() {
                addLine(']', -1);
                addLine('}));', -1);
                saveRecordOutput();
            }
        }
    }
};

module.exports = recordConverter;
