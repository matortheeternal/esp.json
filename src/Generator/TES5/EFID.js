let {
    addDef, subrecord, ckFormId
} = require('../helpers');

module.exports = () => {
    addDef('EFID', subrecord('EFID', ckFormId('Base Effect', ['MGEF'])));
};