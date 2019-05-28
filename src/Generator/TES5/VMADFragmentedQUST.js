let {
    addDef, int16, def, array, sortKey, 
    struct, subrecord, req
} = require('../helpers');

module.exports = () => {
    addDef('VMADFragmentedQUST', req(subrecord('VMAD', struct('Virtual Machine Adapter', [
        int16('Version', null),
        int16('Object Format', null),
        array('Scripts', def('ScriptEntry'), -2),
        def('ScriptFragmentsQuest'),
        array('Aliases', sortKey([0], struct('Alias', [
            def('ScriptPropertyObject'),
            int16('Version', null),
            int16('Object Format', null),
            array('Alias Scripts', def('ScriptEntry'), -2)
        ])), -2)
    ]))));
};