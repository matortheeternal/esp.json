let {
    addDef, ckFormId, subrecord
} = require('../helpers');

module.exports = () => {
    addDef('MO2S', 
        subrecord('MO2S', ckFormId('Material Swap', ['MSWP']))
    );
};