let {prefixLine, countLine, customCounterLine} = require('../helpers');

let countPrefixes = {
    '-1': 4,
    '-2': 2,
    '-4': 1
};

module.exports = {
    type: 'number',
    name: 'count',
    priority: 0,
    handle: (value, line, converter) => {
        if (value === 0) return line; // variable count
        if (value === -255) value = 0; // explicitly null
        if (value === -254) // dynamic counter
            return customCounterLine('dynamicCounter', line, converter);
        if (value === -253) // dynamic counter 2d
            return customCounterLine('dynamicCounter2D', line, converter);
        if (value === -241) // uint32 counter 2d
            return customCounterLine('uint32Counter2D');
        let prefix = countPrefixes[value] || 0;
        line = prefixLine(prefix, line, converter);
        return countLine(value, line, converter);
    }
};
