let {prefixLine} = require('../helpers');

let sizePrefixes = {
    '-5': 4,
    '-3': 2,
    '-2': 1
};

module.exports = {
    type: 'number',
    name: 'size',
    priority: 0,
    handle: (value, line, converter) => {
        if (value === undefined) return line;
        if (value === -255) value = 0;
        if (value < 0) {
            let prefix = sizePrefixes[value];
            return prefixLine(prefix, line, converter);
        }
        converter.addRequires('size');
        return `size(${value}, ${line})`;
    }
};
