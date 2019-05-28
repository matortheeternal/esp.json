let {
    addDef, def, uint32, format
} = require('../helpers');

module.exports = () => {
    addDef('FirstPersonFlagsU32', format(uint32('First Person Flags'), def('BipedObjectFlags')));
};