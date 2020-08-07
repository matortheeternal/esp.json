let {mixedArr, inlineArr} = require('../helpers');

module.exports = {
    type: 'array of string',
    name: 'labels',
    priority: -1,
    handle: (value, line, converter) => {
        if (value.length === 0) return line;
        converter.addRequires('labels');
        value = value.length > 4 ? mixedArr(value, 4) : inlineArr(value);
        return `labels(${line}, ${value})`;
    }
};
