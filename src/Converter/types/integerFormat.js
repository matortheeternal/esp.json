let {typeParser} = require('../parsers');

typeParser('integerFormat', {
    skipAdvance: true,
    test: parser => parser.matchOne(['function', 'identifier']),
    parse: (match, parser) => {
        if (match.type === 'function') return match.value;
        if (match.value === 'null') return 'null';
        parser.addRequires('def');
        return `def('${match.value}')`;
    }
});