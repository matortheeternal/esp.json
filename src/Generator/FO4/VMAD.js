let {
    addDef, int16, conflictType, opts, def, 
    sorted, array, prefix, struct, subrecord
} = require('../helpers');

module.exports = () => {
    addDef('VMAD', 
        subrecord('VMAD', struct('Virtual Machine Adapter', [
            opts(conflictType('Ignore', int16('Version')), {
                "defaultData": 6
            }),
            opts(conflictType('Ignore', int16('Object Format')), {
                "defaultData": 2
            }),
            prefix(2, sorted(array('Scripts', 
                def('ScriptEntry')
            )))
        ]))
    );
};