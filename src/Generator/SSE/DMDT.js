let {
    addDef, bytes, size, subrecord, req
} = require('../helpers');

module.exports = () => {
    addDef('DMDT', 
        req(subrecord('DMDT', size(0, bytes('Texture Files Hashes'))))
    );
};