let {
    addDef, string, subrecord, req, def, 
    sortKey, memberStruct, unordered
} = require('../helpers');

module.exports = () => {
    addDef('MODL', 
        unordered(sortKey([0], memberStruct('Model', [
            req(subrecord('MODL', string('Model FileName'))),
            def('MODT'),
            def('MODC'),
            def('MODS'),
            def('MODF')
        ])))
    );
};