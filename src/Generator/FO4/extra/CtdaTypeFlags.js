let {addDef, flags} = require('../../helpers');

module.exports = () => {
    addDef('CtdaTypeFlags', flags({
        0: 'Or',
        1: 'Use aliases',
        2: 'Use global',
        3: 'Use packdata',
        4: 'Swap Subject and Target'
    }));
};
