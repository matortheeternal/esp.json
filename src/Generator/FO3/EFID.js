let {
    addDef, ckFormId, subrecord
} = require('../helpers');

module.exports = () => {
    addDef('EFID', 
        subrecord('EFID', ckFormId('Base Effect', ['MGEF']))
    );
};