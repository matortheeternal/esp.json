let {paddingLine, prefixLine} = require('../helpers');

module.exports = {
    type: 'number',
    name: 'prefix',
    defaultValue: '4',
    priority: 0,
    handle: (value, line, converter) => {
        line = paddingLine(value, line, converter);
        return prefixLine(value, line, converter);
    }
};
