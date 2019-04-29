let {typeConverter} = require('../../converter');

typeConverter('array of field', {
    test: context => context.matchArray('identifier', 'function'),
    convert: match => match.value
});