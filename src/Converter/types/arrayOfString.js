let {typeParser} = require('../parsers');

typeParser('array of string', {
    skipAdvance: true,
    test: parser => parser.matchArray(['string']),
    parse: a => a
});
