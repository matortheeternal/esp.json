let {isNull, elementCounterLine} = require('../helpers');

module.exports = {
    type: 'identifier',
    name: 'afterSet',
    priority: -1,
    handle: (value, line, converter, opts) => {
        if (isNull(value)) return line;
        let data = converter.getData(value);
        if (data && data.counters.length === 1)
            return elementCounterLine(data.counters[0].path, line, converter);
        opts.afterSet = value;
        return line;
    }
};
