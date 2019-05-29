let {
    addDef, int16, opts, def, array, 
    subrecord, struct
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
            array('Scripts', 
                def('ScriptEntry')
            , -2)
        ]))
    );
};