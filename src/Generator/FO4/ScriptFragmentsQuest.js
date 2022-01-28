let {
    addDef, int8, uint16, conflictType, string, 
    prefix, opts, def, struct, union, 
    int16, int32, sortKey, sorted, array, 
    customCounter
} = require('../helpers');

module.exports = () => {
    addDef('ScriptFragmentsQuest', 
        opts(struct('Script Fragments', [
            int8('Unknown'),
            conflictType('Benign', uint16('FragmentCount')),
            opts(prefix(2, string('ScriptName')), {
                "afterSet": "ScriptFragmentsQuestScriptNameAfterSet"
            }),
            union('Script', 'ScriptFragmentsEmptyScriptDecider', [
                struct('Script Data', [
                    def('ScriptFlags'),
                    def('ScriptProperties')
                ]),
                def('Null')
            ]),
            opts(customCounter('ScriptFragmentsQuestCounter', 
                sorted(array('Fragments', 
                    sortKey([0, 2], struct('Fragment', [
                        uint16('Quest Stage'),
                        int16('Unknown'),
                        int32('Quest Stage Index'),
                        int8('Unknown'),
                        prefix(2, string('ScriptName')),
                        prefix(2, string('FragmentName'))
                    ]))
                ))
            ), {
                "afterSet": "ScriptFragmentsQuestFragmentsAfterSet"
            })
        ]), {
            "afterSet": "ScriptFragmentsQuestAfterSet"
        })
    );
};