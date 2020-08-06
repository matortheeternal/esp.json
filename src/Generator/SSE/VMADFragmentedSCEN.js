let {
    addDef, int16, opts, def, sorted, 
    array, prefix, req, struct, subrecord
} = require('../helpers');

module.exports = () => {
    addDef('VMADFragmentedSCEN', 
        req(subrecord('VMAD', struct('Virtual Machine Adapter', [
            opts(int16('Version'), {
                "defaultNativeValue": 5
            }),
            opts(int16('Object Format'), {
                "defaultNativeValue": 2
            }),
            req(prefix(2, sorted(array('Scripts', 
                def('ScriptEntry')
            )))),
            def('ScriptFragmentsScen')
        ])))
    );
};