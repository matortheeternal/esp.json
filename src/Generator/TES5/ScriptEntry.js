let {
    addDef, string, def, sortKey, struct
} = require('../helpers');

module.exports = () => {
    addDef('ScriptEntry', sortKey([0], struct('Script', [
        string('ScriptName'),
        def('ScriptFlags'),
        def('ScriptProperties')
    ])));
};