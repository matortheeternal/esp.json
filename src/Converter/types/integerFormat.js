let {typeConverter} = require('../../converter');

let intFormatExpr = /^(wbDiv)\(([0-9]+)\)/;

let formatFnMap = {
    wbDiv: match => `div(${match[2]})`
};

typeConverter('integerFormat', {
    test: context => context.match(intFormatExpr),
    convert: match => formatFnMap[match[1]](match)
});