let {convertFunction} = require('../converters'),
    {typeParser} = require('../parsers');

typeParser('ctdaFunction', {
    skipAdvance: true,
    test: parser => parser.match(/^\(/),
    parse: (match, parser) => {
        parser.chomp('(');
        return convertFunction(parser, 'CTDAFunction');
    }
});
