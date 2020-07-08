let {mixedArr} = require('../helpers');

const ITEMS_PER_LINE = 8;

module.exports = function(converter) {
    converter.registerGlobalOutput('groupOrder.js', {
        order: [],
        beforeSave: (converter, output) => {
            converter.addRequires('setGroupOrder');
            converter.write('setGroupOrder(');
            converter.write(mixedArr(output.order, ITEMS_PER_LINE));
            converter.write(');');
        }
    });
};