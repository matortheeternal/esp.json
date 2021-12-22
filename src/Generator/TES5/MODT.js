let {
    addDef, bytes, size, conflict, subrecord
} = require('../helpers');

module.exports = () => {
    addDef('MODT', 
        subrecord('MODT', conflict('Ignore', size(0, bytes('Texture Files Hashes'))))
    );
};