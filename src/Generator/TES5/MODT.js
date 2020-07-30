let {
    addDef, subrecord, bytes, size
} = require('../helpers');

module.exports = () => {
    addDef('MODT', 
        subrecord('MODT', size(0, bytes('Texture Files Hashes')))
    );
};