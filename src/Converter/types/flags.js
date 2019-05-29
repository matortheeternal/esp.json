let {typeParser} = require('../parsers');

typeParser('flags', {
    skipAdvance: true,
    test: parser => parser.matchArray(['string', 'function']),
    parse: entries => Object.assign({}, entries)
});