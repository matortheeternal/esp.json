let {typeParser} = require('../parsers'),
    {arr} = require('../helpers');

typeParser('array of member', {
    skipAdvance: true,
    test: parser => parser.matchArray(['member']),
    parse: arr
});