let {
    addDef, ckFormId, subrecord
} = require('../helpers');

module.exports = () => {
    addDef('MO5S', 
        subrecord('MO5S', ckFormId('Material Swap', ['MSWP']))
    );
};