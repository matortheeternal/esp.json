let {
    addDef, string, subrecord, req, def, 
    sortKey, memberStruct
} = require('../helpers');

module.exports = () => {
    addDef('MODLActor', 
        req(sortKey([0], memberStruct('Model', [
            req(subrecord('MODL', string('Model FileName'))),
            def('MODT'),
            def('MODS')
        ])))
    );
};