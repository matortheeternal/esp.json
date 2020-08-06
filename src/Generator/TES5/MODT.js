let {
    addDef, bytes, size, subrecord, req
} = require('../helpers');

module.exports = () => {
    addDef('MODT', 
        req(subrecord('MODT', size(0, bytes('Texture Files Hashes'))))
    );
};