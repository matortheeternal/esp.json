let {
    addDef, int16, opts, def, sorted, 
    array, prefix, req, sortKey, struct, 
    subrecord
} = require('../helpers');

module.exports = () => {
    addDef('VMADFragmentedQUST', 
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
            def('ScriptFragmentsQuest'),
            prefix(2, sorted(array('Aliases', 
                sortKey([0], struct('Alias', [
                    def('ScriptPropertyObject'),
                    opts(int16('Version'), {
                        "defaultNativeValue": 5
                    }),
                    opts(int16('Object Format'), {
                        "defaultNativeValue": 2
                    }),
                    prefix(2, sorted(array('Alias Scripts', 
                        def('ScriptEntry')
                    )))
                ]))
            )))
        ])))
    );
};