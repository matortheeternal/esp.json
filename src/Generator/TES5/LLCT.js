let {
    addDef, subrecord, uint8
} = require('../helpers');

module.exports = () => {
    addDef('LLCT', subrecord('LLCT', uint8('Count', null)));
};