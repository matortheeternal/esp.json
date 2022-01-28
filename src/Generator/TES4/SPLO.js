let {
    addDef, ckFormId, subrecord
} = require('../helpers');

module.exports = () => {
    addDef('SPLO', 
        subrecord('SPLO', ckFormId('Spell', ['SPEL', 'LVSP']))
    );
};