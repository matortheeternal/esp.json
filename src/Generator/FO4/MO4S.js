let {
    addDef, ckFormId, subrecord
} = require('../helpers');

module.exports = () => {
    addDef('MO4S', 
        subrecord('MO4S', ckFormId('Material Swap', ['MSWP']))
    );
};