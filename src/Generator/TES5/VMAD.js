let {
    addDef, int16, opts, def, sorted, 
    array, prefix, subrecord, struct
} = require('../helpers');

module.exports = () => {
    addDef('VMAD', 
        subrecord('VMAD', struct('Virtual Machine Adapter', [
            opts(int16('Version'), {
                "defaultNativeValue": 5
            }),
            opts(int16('Object Format'), {
                "defaultNativeValue": 2
            }),
            prefix(2, sorted(array('Scripts', 
                def('ScriptEntry')
            )))
        ]))
    );
};