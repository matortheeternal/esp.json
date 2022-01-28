let {
    addDef, ckFormId, subrecord
} = require('../helpers');

module.exports = () => {
    addDef('DMDS', 
        subrecord('DMDS', ckFormId('Material Swap', ['MSWP']))
    );
};