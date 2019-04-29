let {typeConverter} = require('../converter');

typeConverter('flags', {
    test: context => context.matchArray('string'),
    convert: match => Object.assign({}, match.entries)
});