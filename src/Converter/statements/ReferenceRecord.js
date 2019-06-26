let {statementConverter, convertFunction} = require('../converters');

let referenceRecordExpr = /^ReferenceRecord\(/;

statementConverter('ReferenceRecord', {
    test: parser => parser.match(referenceRecordExpr),
    convert: converter => {
        let sig = converter.parseType('signature', {}, true);
        converter.newOutput(`${sig}.js`);
        converter.write(convertFunction(converter, 'ReferenceRecord'));
        converter.saveOutput();
    }
});
