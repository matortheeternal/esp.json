let {typeParser} = require('../parsers'),
    {arr} = require('../helpers');

typeParser('array of ctdaFunction', {
    skipAdvance: true,
    test: parser => {
        if (!parser.chomp('(')) return;
        let entries = [];
        while (!parser.startsWith(');')) {
            let match = parser.matchOne(['ctdaFunction']);
            if (!match) throw new ParseError(`Expected ctdaFunction`);
            entries.push(match.value);
            parser.next();
            parser.chomp(',');
        }
        return entries;
    },
    parse: arr
});
