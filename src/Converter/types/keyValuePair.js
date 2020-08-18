let {typeParser, resolveType} = require('../parsers');

typeParser('keyValuePair', {
    test: (parser, options) => {
        if (!parser.chomp(`${options.key}: `)) return;
        let type = resolveType(options.valueType);
        return type.test(parser, options);
    },
    parse: (match, parser, options) => {
        let type = resolveType(options.valueType);
        return type.parse(match, parser, options);
    }
});
