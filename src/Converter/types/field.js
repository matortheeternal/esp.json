let {typeParser} = require('../parsers');

typeParser('field', {
    skipAdvance: true,
    test: parser => parser.matchOne(['function', 'identifier']),
    parse: (match, parser) => {
        if (match.type === 'function') return match.value;
        parser.addRequires('def');
        return `def('${match.value}')`;
    }
});