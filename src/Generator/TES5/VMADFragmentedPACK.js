let {
    addDef, int16, def, array, subrecord, 
    struct, req
} = require('../helpers');

module.exports = () => {
    addDef('VMADFragmentedPACK', req(subrecord('VMAD', struct('Virtual Machine Adapter', [
        int16('Version', null),
        int16('Object Format', null),
        array('Scripts', def('ScriptEntry'), -2),
        def('ScriptFragmentsPack')
    ]))));
};