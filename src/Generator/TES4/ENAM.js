let {
    addDef, ckFormId, subrecord
} = require('../helpers');

module.exports = () => {
    addDef('ENAM', 
        subrecord('ENAM', ckFormId('Enchantment', ['ENCH']))
    );
};