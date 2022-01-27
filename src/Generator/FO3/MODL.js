let {
    addDef, string, subrecord, req, bytes, 
    size, conflictType, def, sortKey, memberStruct, 
    unordered
} = require('../helpers');

module.exports = () => {
    addDef('MODL', 
        unordered(sortKey([0], memberStruct('Model', [
            req(subrecord('MODL', string('Model FileName'))),
            subrecord('MODB', conflictType('Ignore', size(4, bytes('Unknown')))),
            subrecord('MODT', conflictType('Ignore', size(0, bytes('Texture Files Hashes')))),
            def('MODS'),
            def('MODD')
        ])))
    );
};