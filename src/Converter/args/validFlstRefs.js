let {isNull} = require('../helpers');

module.exports = {
    type: 'array of signature',
    name: 'validFlstRefs',
    priority: -1,
    handle: (value, line, converter, opts) => {
        if (isNull(value)) return line;
        opts.validateFlstRefs = true;
        return line;
    }
};
