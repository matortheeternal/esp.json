let {statementConverter, convertFunction} = require('../converters'),
    {newLine} = require('../helpers');

let wbCTDAFunctionsExpr = /^wbCTDAFunctions : array\[0..\d+] of TCTDAFunction = /;

statementConverter('wbCTDAFunctions', {
    test: parser => parser.match(wbCTDAFunctionsExpr),
    convert: converter => {
        converter.newOutput(`CTDAFunctions.js`);
        converter.addRequires('ctdaFunctions');
        let code = convertFunction(converter, 'CTDAFunctions');
        converter.write(`ctdaFunctions(${code});`);
        converter.saveOutput();
    }
});
