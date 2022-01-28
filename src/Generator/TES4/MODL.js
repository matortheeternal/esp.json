let {
    addDef, string, subrecord, float, conflictType, 
    bytes, size, sortKey, memberStruct
} = require('../helpers');

module.exports = () => {
    addDef('MODL', 
        sortKey([0], memberStruct('Model', [
            subrecord('MODL', string('Model FileName')),
            subrecord('MODB', conflictType('Benign', float('Bound Radius'))),
            subrecord('MODT', conflictType('Ignore', size(0, bytes('Texture Files Hashes'))))
        ]))
    );
};