let {typeParser} = require('../parsers'),
    {inlineArr} = require('../helpers');

typeParser('array of number', {
    skipAdvance: true,
    test: parser => parser.matchArray(['number']),
    parse: inlineArr
});