let {typeParser} = require('../parsers'),
    {arr} = require('../helpers');

typeParser('array of flags', {
    skipAdvance: true,
    test: parser => parser.matchArray(['function']),
    parse: arr
});
