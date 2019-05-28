let {
    addDef, lenstring, def, sortKey, struct
} = require('../helpers');

module.exports = () => {
    addDef('ScriptEntry', sortKey([0], struct('Script', [
        lenstring('ScriptName'),
        def('ScriptFlags'),
        def('ScriptProperties')
    ])));
};