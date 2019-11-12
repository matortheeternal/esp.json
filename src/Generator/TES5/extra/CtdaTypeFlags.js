let {addDef, flags} = require('../../helpers');

module.exports = () => {
    addDef('CtdaTypeFlags', flags({
        0x01: 'Or',
        0x02: 'Use aliases',
        0x04: 'Use global',
        0x08: 'Use packdata',
        0x10: 'Swap Subject and Target'
    }));
};
