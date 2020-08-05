let {
    addDef, int8, uint16, string, prefix, 
    int16, int32, sortKey, struct, sorted, 
    array, customCounter, opts
} = require('../helpers');

module.exports = () => {
    addDef('ScriptFragmentsQuest', 
        opts(struct('Script Fragments', [
            int8('Unknown'),
            uint16('FragmentCount'),
            prefix(2, string('FileName')),
            customCounter('ScriptFragmentsQuestCounter', 
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
            )
        ]), {
            "afterSet": "ScriptFragmentsQuestAfterSet"
        })
    );
};