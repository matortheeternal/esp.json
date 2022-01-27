let {typeParser} = require('../parsers');

typeParser('array of identifier', {
    skipAdvance: true,
    test: parser => parser.matchArray(['identifier']),
    parse: a => a
});
