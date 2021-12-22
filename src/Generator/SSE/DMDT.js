let {
    addDef, bytes, size, conflict, subrecord
} = require('../helpers');

module.exports = () => {
    addDef('DMDT', 
        subrecord('DMDT', conflict('Ignore', size(0, bytes('Texture Files Hashes'))))
    );
};