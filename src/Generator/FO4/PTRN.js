let {
    addDef, ckFormId, subrecord
} = require('../helpers');

module.exports = () => {
    addDef('PTRN', 
        subrecord('PTRN', ckFormId('Preview Transform', ['TRNS']))
    );
};