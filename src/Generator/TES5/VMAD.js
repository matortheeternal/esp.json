let {
    addDef, int16, def, array, subrecord, 
    struct
} = require('../helpers');

module.exports = () => {
    addDef('VMAD', subrecord('VMAD', struct('Virtual Machine Adapter', [
        int16('Version', null),
        int16('Object Format', null),
        array('Scripts', def('ScriptEntry'), -2)
    ])));
};