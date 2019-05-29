let {
    addDef, subrecord, cstring, req, def, 
    sortKey, multiStruct
} = require('../helpers');

module.exports = () => {
    addDef('MODL', 
        req(sortKey([0], multiStruct('Model', [
            req(subrecord('MODL', cstring('Model FileName'))),
            def('MODT'),
            def('MODS')
        ])))
    );
};