let {
    addDef, int16, conflictType, opts, def, 
    sorted, array, prefix, struct, subrecord
} = require('../helpers');

module.exports = () => {
    addDef('VMADFragmentedSCEN', 
        subrecord('VMAD', struct('Virtual Machine Adapter', [
            opts(conflictType('Ignore', int16('Version')), {
                "defaultNativeValue": 6
            }),
            opts(conflictType('Ignore', int16('Object Format')), {
                "defaultNativeValue": 2
            }),
            prefix(2, sorted(array('Scripts', 
                def('ScriptEntry')
            ))),
            def('ScriptFragmentsScen')
        ]))
    );
};