let {
    addDef, bytes, size, subrecord
} = require('../helpers');

module.exports = () => {
    addDef('MODT', 
        subrecord('MODT', size(0, bytes('Texture Files Hashes')))
    );
};