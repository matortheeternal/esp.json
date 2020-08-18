let {statementConverter} = require('../converters');

let wbAddGroupOrderExpr = /^wbAddGroupOrder\(/;

statementConverter('wbAddGroupOrder', {
    test: parser => parser.match(wbAddGroupOrderExpr),
    convert: converter => {
        let sig = converter.parseType('signature');
        let output = converter.globalOutputs['groupOrder.js'];
        if (!converter.skipping) output.order.push(`'${sig}'`);
        converter.chomp(')');
    }
});
