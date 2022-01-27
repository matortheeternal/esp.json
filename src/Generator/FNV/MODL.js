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
            def('MODT'),
            def('MODS'),
            def('MODD')
        ])))
    );
};