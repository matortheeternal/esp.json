let {
    addDef, prefixLength, string, def, sortKey, 
    struct
} = require('../helpers');

module.exports = () => {
    addDef('ScriptEntry', 
        sortKey([0], struct('Script', [
            prefixLength(2, string('ScriptName')),
            def('ScriptFlags'),
            def('ScriptProperties')
        ]))
    );
};