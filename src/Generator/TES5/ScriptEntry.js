let {
    addDef, prefix, string, def, sortKey, 
    struct
} = require('../helpers');

module.exports = () => {
    addDef('ScriptEntry', 
        sortKey([0], struct('Script', [
            prefix(2, string('ScriptName')),
            def('ScriptFlags'),
            def('ScriptProperties')
        ]))
    );
};