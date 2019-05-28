let {
    addDef, subrecord, bytes
} = require('../helpers');

module.exports = () => {
    addDef('DMDT', subrecord('DMDT', bytes('Texture Files Hashes', 0)));
};