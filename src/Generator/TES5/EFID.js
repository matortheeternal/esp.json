let {
    addDef, subrecord, ckFormId
} = require('../helpers');

module.exports = game => {
    addDef('EFID', 
        subrecord('EFID', ckFormId('Base Effect', ['MGEF'])),
    );
};