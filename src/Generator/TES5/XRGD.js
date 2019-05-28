let {
    addDef, subrecord, bytes
} = require('../helpers');

module.exports = () => {
    addDef('XRGD', subrecord('XRGD', bytes('Ragdoll Data', 0)));
};