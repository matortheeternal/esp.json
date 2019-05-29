let {typeParser} = require('../parsers'),
    {inlineArr, mixedArr} = require('../helpers');

const ARRAY_WRAP_LENGTH = 3;
const ITEMS_PER_LINE = 5;

typeParser('array of signature', {
    skipAdvance: true,
    test: parser => parser.matchArray(['signature']),
    parse: a => {
        a = a.map(v => `'${v}'`);
        return a.length < ARRAY_WRAP_LENGTH ?
            inlineArr(a) :
            mixedArr(a, ITEMS_PER_LINE);
    }
});