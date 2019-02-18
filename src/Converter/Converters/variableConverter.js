let {
    newOutput, saveOutput, append, addLine, addBlankLine
} = require('../output');
let { LineExpr } = require('../helpers');
let memberParsers = require('./memberConverters'),
    defParsers = require('./defConverters');

let newVarOutput = function(id) {
    newOutput(`${id}.js`);
    addBlankLine();
    addLine('module.exports = () => {', 1);
    addLine(`addDef('${id}', `)
};

let saveVarOutput = function() {
    addLine('};', -1);
    saveOutput();
};

let variableConverter = {
    name: 'Variable',
    expr: LineExpr(`wb([A-Za-z]+) := `),
    process: function(match) {
        newVarOutput(match[0]);
    },
    then: Array.prototype.concat(
        defParsers,
        memberParsers
    ),
    end: {
        expr: LineExpr(';'),
        process: function() {
            append(');');
            saveVarOutput();
        }
    }
};

module.exports = variableConverter;