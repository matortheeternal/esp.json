let {formatLine} = require('../helpers');

module.exports = {
    type: 'integerFormat',
    name: 'format',
    priority: -1,
    handle: formatLine
};
