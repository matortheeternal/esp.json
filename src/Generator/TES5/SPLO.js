let {
    addDef, subrecord, ckFormId
} = require('../helpers');

module.exports = () => {
    addDef('SPLO', 
        subrecord('SPLO', ckFormId('Actor Effect', [
            'SPEL',    'SHOU',    'LVSP'
        ]))
    );
};