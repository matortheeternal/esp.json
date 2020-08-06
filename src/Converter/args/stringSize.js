let {prefixLine} = require('../helpers');

let sizePrefixes = {
    '-5': 4,
    '-3': 2,
    '-2': 1
};

module.exports = {
    type: 'number',
    name: 'stringSize',
    priority: 0,
    handle: (value, line, converter) => {
        if (!value) return line;
        if (value < 0) {
            let prefix = sizePrefixes[value];
            return prefixLine(prefix, line, converter);
        }
        converter.addRequires('size');
        return `size(${value}, ${line})`;
    }
};
