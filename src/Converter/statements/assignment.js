let {statementConverter, convertFunction} = require('../converters');

let assignmentExpr = /^([a-z][a-z0-9]*) := ([a-z][a-z0-9]*)\(/i;

let resolveName = function(str) {
    return str.startsWith('wb') ? str.slice(2) : str;
};

let skipReq = function(name) {
    if (!name.endsWith('Req')) return;
    console.log(`Skipping Req variant ${name}`);
    return true;
};

statementConverter('assignment', {
    test: parser => parser.match(assignmentExpr),
    convert: (converter, match) => {
        let name = resolveName(match[1]);
        converter.newOutput(`${name}.js`);
        converter.addRequires('addDef');
        let code = convertFunction(converter, match[2]);
        converter.write(`addDef('${name}', ${code});`);
        if (!skipReq(name)) converter.saveOutput();
        converter.chomp(';');
    }
});