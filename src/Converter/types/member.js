let {typeParser} = require('../parsers');

typeParser('member', {
    skipAdvance: true,
    test: parser => parser.matchOne(['function', 'identifier']),
    parse: (match, parser) => {
        if (match.type === 'function') return match.value;
        if (match.value.endsWith('Req') || match.value.endsWith('req')) {
            parser.addRequires('req', 'def');
            return `req(def('${match.value.slice(0, -3)}'))`;
        }
        parser.addRequires('def');
        return `def('${match.value}')`;
    }
});
