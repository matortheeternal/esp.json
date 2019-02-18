let {
    newOutput, saveOutput, addLine, addBlankLine, addRequires
} = require('../output');
let { LineExpr } = require('../helpers');
let memberConverters = require('./memberConverters'),
    {enumConverter} = require('./sharedConverters'),
    fieldConverters = require('./fieldConverters');

let newVarOutput = function(id) {
    newOutput(`${id}.js`);
    addRequires('addDef');
    addBlankLine();
    addLine('module.exports = () => {', 1);
    addLine(`addDef('${id}', `, 1);
};

let saveVarOutput = function() {
    addLine('};', -1);
    saveOutput();
};

let variableConverter = {
    name: 'Variable',
    expr: LineExpr(`wb([A-Za-z][A-Za-z0-9]+) :=`),
    process: function(match) {
        newVarOutput(match[1]);
    },
    then: Array.prototype.concat(
        [enumConverter],
        fieldConverters,
        memberConverters
    ),
    end: {
        expr: LineExpr(';'),
        process: function() {
            addLine(');', -1);
            saveVarOutput();
        }
    }
};

module.exports = variableConverter;