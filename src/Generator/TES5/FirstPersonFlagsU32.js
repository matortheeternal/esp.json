let {
    addDef, def, uint32
} = require('../helpers');

module.exports = () => {
    addDef('FirstPersonFlagsU32', uint32('First Person Flags', def('BipedObjectFlags')));
};