let {
    addDef, int16, opts, def, array, 
    sortKey, struct, subrecord, req
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
            array('Scripts', 
                def('ScriptEntry')
            , -2),
            def('ScriptFragmentsQuest'),
            array('Aliases', 
                sortKey([0], struct('Alias', [
                    def('ScriptPropertyObject'),
                    opts(int16('Version'), {
                        "defaultNativeValue": 5
                    }),
                    opts(int16('Object Format'), {
                        "defaultNativeValue": 2
                    }),
                    array('Alias Scripts', 
                        def('ScriptEntry')
                    , -2)
                ]))
            , -2)
        ])))
    );
};