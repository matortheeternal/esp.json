let {typeConverter} = require('../../converter');

typeConverter('array of signature', {
    test: context => context.matchArray('signature'),
    convert: match => match.entries
});