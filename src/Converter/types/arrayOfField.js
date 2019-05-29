let {typeParser} = require('../parsers'),
    {arr} = require('../helpers');

typeParser('array of field', {
    skipAdvance: true,
    test: parser => parser.matchArray(['field']),
    parse: entries => arr(entries)
});