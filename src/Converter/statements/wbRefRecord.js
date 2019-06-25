let {statementConverter, convertFunction} = require('../converters');

let wbRefRecordExpr = /^wbRefRecord\(/;

statementConverter('wbRefRecord', {
    test: parser => parser.match(wbRefRecordExpr),
    convert: converter => {
        let sig = converter.parseType('signature', {}, true);
        converter.newOutput(`${sig}.js`);
        converter.write(convertFunction(converter, 'wbRefRecord'));
        converter.saveOutput();
    }
});
