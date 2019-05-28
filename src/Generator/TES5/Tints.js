let {
    addDef, subrecord, uint16, string, def, 
    ckFormId, multiStruct, arrayOfSubrecord, float
} = require('../helpers');

module.exports = () => {
    addDef('Tints', arrayOfSubrecord('Tint Masks', undefined));
};