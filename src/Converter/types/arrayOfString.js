let {typeParser} = require('../parsers'),
    {inlineArr} = require('../helpers');

typeParser('array of string', {
    skipAdvance: true,
    test: parser => parser.matchArray(['string']),
    parse: a => inlineArr(a)
});