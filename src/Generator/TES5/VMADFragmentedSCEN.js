let {
    addDef, int16, opts, def, array, 
    subrecord, struct, req
} = require('../helpers');

module.exports = () => {
    addDef('VMADFragmentedSCEN', req(subrecord('VMAD', struct('Virtual Machine Adapter', [
        opts(int16('Version'), {
            "defaultNativeValue": 5
        }),
        opts(int16('Object Format'), {
            "defaultNativeValue": 2
        }),
        array('Scripts', def('ScriptEntry'), -2),
        def('ScriptFragmentsScen')
    ]))));
};