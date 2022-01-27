let {addDef, flags} = require('../../helpers');

module.exports = () => {
    addDef('CtdaTypeFlags', flags({
        0: 'Or',
        1: 'Run on target',
        2: 'Use global'
    }));
};
