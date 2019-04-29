let { addLine, addComment } = require('../output');
let { LineExpr, convertStr, strExpr } = require('../oldHelpers');

let flagConverter = {
    name: 'Flag',
    expr: LineExpr(`(?:{(0x[0-9A-F]+)})?\\s*${strExpr},?`),
    process: function(match) {
        let name = match[2];
        addLine(`'${convertStr(name)}',`);
        match[1] && addComment(match[1]);
    }
};

let commentConverter = {
    name: 'Comment',
    expr: LineExpr(`(//[^\\n]+|{[^}]+})`),
    process: () => {}
};

let enumIndex;

let enumConverter = {
    name: 'wbEnum',
    expr: LineExpr(`wbEnum\\(\\[`),
    process: function() {
        addLine('{', 1);
        enumIndex = 0;
    },
    then: [{
        name: 'Enum Entry',
        expr: LineExpr(`(?:{\\s*[0-9]+}\\s*)?${strExpr},?`),
        process: function(match) {
            let value = convertStr(match[1]);
            addLine(`'${enumIndex++}': '${value}',`);
        }
    }],
    end: {
        expr: LineExpr('\\](?:,\\s+\\[)?'),
        process: () => {},
        then: [{
            name: 'Enum Entry (Decimal)',
            expr: LineExpr(`(\\-?[0-9]+), ${strExpr},?`),
            process: function(match) {
                let value = convertStr(match[2]);
                addLine(`'${match[1]}': '${value}',`);
            }
        }, {
            name: 'Enum Entry (Hex)',
            expr: LineExpr(`(\\$[0-9A-F]+), ${strExpr},?`),
            process: function(match) {
                let index = `0x${match[1].slice(1)}`,
                    value = convertStr(match[2]);
                addLine(`'${index}': '${value}',`);
            }
        }, {
            name: 'Enum Entry (Int64)',
            expr: LineExpr(`(Int64\\(\\$[0-9A-F]+)\\), ${strExpr},?`),
            process: function(match) {
                let index = `0x${match[1].slice(7)}`,
                    value = convertStr(match[2]);
                addLine(`'${index}': '${value}',`);
            }
        }],
        end: {
            expr: LineExpr('\\]?\\)'),
            process: () => addLine('}', -1)
        }
    }
};

module.exports = { flagConverter, commentConverter, enumConverter };