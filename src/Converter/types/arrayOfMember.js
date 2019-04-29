let {typeConverter} = require('../converter');

typeConverter('array of member', {
    test: context => context.matchArray('identifier', 'function'),
    convert: match => match.value
});