let {typeConverter} = require('../../converter');

typeConverter('array of number', {
    test: context => context.matchArray('number'),
    convert: match => match.value
});