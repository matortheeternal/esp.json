let {
    addDef, ckFormId, subrecord
} = require('../helpers');

module.exports = () => {
    addDef('MODS', 
        subrecord('MODS', ckFormId('Material Swap', ['MSWP']))
    );
};