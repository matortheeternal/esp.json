let {
    addDef, bytes, size, conflictType, subrecord
} = require('../helpers');

module.exports = () => {
    addDef('MODT', 
        subrecord('MODT', conflictType('Ignore', size(0, bytes('Texture Files Hashes'))))
    );
};