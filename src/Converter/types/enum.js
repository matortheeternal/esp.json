let {typeParser} = require('../parsers');

typeParser('enum', {
    skipAdvance: true,
    test: parser => parser.matchArray(['function', 'number', 'string']),
    parse: entries => {
        let options = {},
            max = entries.length - 1;
        for (let i = 0; i < max; i += 2)
            options[entries[i]] = entries[i + 1];
        return options;
    }
});