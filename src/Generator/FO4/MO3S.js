let {
    addDef, ckFormId, subrecord
} = require('../helpers');

module.exports = () => {
    addDef('MO3S', 
        subrecord('MO3S', ckFormId('Material Swap', ['MSWP']))
    );
};