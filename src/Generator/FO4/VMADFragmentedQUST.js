let {
    addDef, int16, conflictType, opts, def, 
    sorted, array, prefix, sortKey, struct, 
    subrecord
} = require('../helpers');

module.exports = () => {
    addDef('VMADFragmentedQUST', 
        subrecord('VMAD', struct('Virtual Machine Adapter', [
            opts(conflictType('Ignore', int16('Version')), {
                "defaultData": 6
            }),
            opts(conflictType('Ignore', int16('Object Format')), {
                "defaultData": 2
            }),
            prefix(2, sorted(array('Scripts', 
                def('ScriptEntry')
            ))),
            def('ScriptFragmentsQuest'),
            prefix(2, sorted(array('Aliases', 
                sortKey([0], struct('Alias', [
                    def('ScriptPropertyObject'),
                    opts(conflictType('Ignore', int16('Version')), {
                        "defaultData": 6
                    }),
                    opts(conflictType('Ignore', int16('Object Format')), {
                        "defaultData": 2
                    }),
                    prefix(2, sorted(array('Alias Scripts', 
                        def('ScriptEntry')
                    )))
                ]))
            )))
        ]))
    );
};