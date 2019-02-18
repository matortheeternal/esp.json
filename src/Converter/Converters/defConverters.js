let { append, addLine, addComment } = require('../output');
let { LineExpr, strExpr } = require('../helpers');

let defConverters = [{
    name: 'wbEnum',
    expr: LineExpr(`wbEnum\\(\\[`),
    process: function() {
        append('[', 1);
    },
    then: [{
        name: 'Enum Entry',
        expr: LineExpr(`(?:{\s*([0-9]+)}\s*)?${strExpr},?`),
        process: function(match) {
            let key = match[2] || match[1];
            addLine(`'${key}',`);
            addComment(match[1]);
        }
    }],
    end: {
        expr: LineExpr('\\],\\s+\\['),
        then: [{
            name: 'Enum Entry',
            expr: LineExpr(`(\\$?[\-0-9]+) ${strExpr},?`),
            process: function(match) {
                let key = match[2],
                    n = `0x${match[1].slice(1)}`;
                addLine(`{ n: ${n} , key: '${key}' },`);
            }
        }],
        end: {
            expr: LineExpr('\\]\\)'),
            process: () => addLine(']', -1)
        }
    }
}];

module.exports = defConverters;