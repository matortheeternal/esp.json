let {
    addDef, bytes, size, subrecord
} = require('../helpers');

module.exports = () => {
    addDef('DMDT', 
        subrecord('DMDT', size(0, bytes('Texture Files Hashes')))
    );
};