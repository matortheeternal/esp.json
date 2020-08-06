let {isNull, newLine} = require('../helpers');

module.exports = {
    type: 'identifier',
    name: 'countCallback',
    priority: -1,
    handle: (value, line, converter) => {
        if (isNull(value)) return line;
        converter.addRequires('customCounter');
        return `customCounter('${value}', ${newLine(line)})`;
    }
};
