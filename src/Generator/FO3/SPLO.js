let {
    addDef, ckFormId, subrecord
} = require('../helpers');

module.exports = () => {
    addDef('SPLO', 
        subrecord('SPLO', ckFormId('Actor Effect', ['SPEL']))
    );
};