let {
    addDef, subrecord, uint32
} = require('../helpers');

module.exports = () => {
    addDef('KSIZ', subrecord('KSIZ', uint32('Keyword Count', null)));
};