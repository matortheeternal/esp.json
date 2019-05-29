let {statementConverter, convertFunction} = require('../converters');

let wbRecordExpr = /^wbRecord\(/;

statementConverter('wbRecord', {
    test: parser => parser.match(wbRecordExpr),
    convert: converter => {
        let sig = converter.parseType('signature', {}, true);
        converter.newOutput(`${sig}.js`);
        converter.write(convertFunction(converter, 'wbRecord'));
        converter.saveOutput();
    }
});