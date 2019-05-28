let {
    addDef, int8, uint16, string, int16, 
    int32, sortKey, struct, array, opts
} = require('../helpers');

module.exports = () => {
    addDef('ScriptFragmentsQuest', opts(struct('Script Fragments', [
        int8('Unknown'),
        uint16('FragmentCount'),
        string('FileName'),
        array('Fragments', sortKey([0, 2], struct('Fragment', [
            uint16('Quest Stage'),
            int16('Unknown'),
            int32('Quest Stage Index'),
            int8('Unknown'),
            string('ScriptName'),
            string('FragmentName')
        ])))
    ]), {
        "afterSet": "ScriptFragmentsQuestAfterSet"
    }));
};