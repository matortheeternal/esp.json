let {
    addDef, subrecord, bytes
} = require('../helpers');

module.exports = () => {
    addDef('XRGB', subrecord('XRGB', bytes('Ragdoll Biped Data', 0)));
};