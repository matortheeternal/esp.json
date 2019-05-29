let {typeParser} = require('../parsers');

typeParser('flagsField', {
    skipAdvance: true,
    test: parser => parser.matchOne(['flags', 'function']),
    parse: match => match.value
});