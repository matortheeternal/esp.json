let {
    addDef, string, subrecord, req, def, 
    sortKey, memberStruct, unordered
} = require('../helpers');

module.exports = () => {
    addDef('MODLActor', 
        unordered(sortKey([0], memberStruct('Model', [
            req(subrecord('MODL', string('Model FileName'))),
            def('MODT'),
            def('MODS')
        ])))
    );
};