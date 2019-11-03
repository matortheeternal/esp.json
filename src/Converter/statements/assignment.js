let {statementConverter, convertFunction} = require('../converters'),
    {newLine} = require('../helpers');

let assignmentExpr = /^([a-z][a-z0-9_]*)\s*:=\s*([a-z][a-z0-9]*)\(/i,
    nameExpr = /^(?:wb)?([a-z0-9_]+?)(req)?$/i;

let resolveName = function(str) {
    return str.match(nameExpr);
};

statementConverter('assignment', {
    test: parser => parser.match(assignmentExpr),
    convert: (converter, match) => {
        let [, name, isReq] = resolveName(match[1]);
        converter.newOutput(`${name}.js`);
        converter.addRequires('addDef');
        let code = convertFunction(converter, match[2]);
        converter.write(`addDef('${name}', ${newLine(code)});`);
        converter.saveOutput(isReq);
        converter.chomp(';');
    }
});
