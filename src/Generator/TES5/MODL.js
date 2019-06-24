let {
    addDef, subrecord, string, req, def, 
    sortKey, multiStruct
} = require('../helpers');

module.exports = () => {
    addDef('MODL', 
        req(sortKey([0], multiStruct('Model', [
            req(subrecord('MODL', string('Model FileName'))),
            def('MODT'),
            def('MODS')
        ])))
    );
};