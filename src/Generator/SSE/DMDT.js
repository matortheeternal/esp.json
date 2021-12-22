let {
    addDef, bytes, size, conflictType, subrecord
} = require('../helpers');

module.exports = () => {
    addDef('DMDT', 
        subrecord('DMDT', conflictType('Ignore', size(0, bytes('Texture Files Hashes'))))
    );
};