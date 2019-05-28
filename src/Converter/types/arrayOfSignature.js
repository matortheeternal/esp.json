let {typeParser} = require('../parsers'),
    {inlineArr} = require('../helpers');

typeParser('array of signature', {
    skipAdvance: true,
    test: parser => parser.matchArray(['signature']),
    parse: a => inlineArr(a.map(v => `'${v}'`))
});