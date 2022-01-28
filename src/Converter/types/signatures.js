let {typeParser} = require('../parsers');

typeParser('signatures', {
    skipAdvance: true,
    test: parser => parser.matchOne(['array of signature', 'identifier']),
    parse: (match, parser) => {
        if (match.type === 'array of signature') return match.value;
        parser.addRequires('def');
        return `def('${match.value}')`;
    }
});
