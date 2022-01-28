let {
    addDef, ckFormId, subrecord
} = require('../helpers');

module.exports = () => {
    addDef('CUSD', 
        subrecord('CUSD', ckFormId('Sound - Crafting', ['SNDR']))
    );
};