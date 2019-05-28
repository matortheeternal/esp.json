let {
    addDef, subrecord, ckFormId
} = require('../helpers');

module.exports = () => {
    addDef('EITM', subrecord('EITM', ckFormId('Object Effect', ['ENCH', 'SPEL'])));
};