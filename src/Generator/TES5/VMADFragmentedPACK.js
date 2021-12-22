let {
    addDef, int16, conflict, opts, def, 
    sorted, array, prefix, struct, subrecord
} = require('../helpers');

module.exports = () => {
    addDef('VMADFragmentedPACK', 
        subrecord('VMAD', struct('Virtual Machine Adapter', [
            opts(conflict('Ignore', int16('Version')), {
                "defaultNativeValue": 5
            }),
            opts(conflict('Ignore', int16('Object Format')), {
                "defaultNativeValue": 2
            }),
            prefix(2, sorted(array('Scripts', 
                def('ScriptEntry')
            ))),
            def('ScriptFragmentsPack')
        ]))
    );
};