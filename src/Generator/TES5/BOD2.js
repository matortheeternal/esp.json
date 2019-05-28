let {
    addDef, def, uint32, format, subrecord, 
    struct, req
} = require('../helpers');

module.exports = () => {
    addDef('BOD2', req(subrecord('BOD2', struct('Biped Body Template', [
        def('FirstPersonFlagsU32'),
        format(uint32('Armor Type'), def('ArmorTypeEnum'))
    ]))));
};