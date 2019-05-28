let {
    addDef, subrecord, bytes
} = require('../helpers');

module.exports = () => {
    addDef('MODT', subrecord('MODT', bytes('Texture Files Hashes', 0)));
};