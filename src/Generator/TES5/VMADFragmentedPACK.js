let {
    addDef, int16, conflictType, opts, def, 
    sorted, array, prefix, struct, subrecord
} = require('../helpers');

module.exports = () => {
    addDef('VMADFragmentedPACK', 
        subrecord('VMAD', struct('Virtual Machine Adapter', [
            opts(conflictType('Ignore', int16('Version')), {
                "defaultData": 5
            }),
            opts(conflictType('Ignore', int16('Object Format')), {
                "defaultData": 2
            }),
            prefix(2, sorted(array('Scripts', 
                def('ScriptEntry')
            ))),
            def('ScriptFragmentsPack')
        ]))
    );
};