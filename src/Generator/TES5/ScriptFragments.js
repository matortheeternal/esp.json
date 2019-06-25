let {
    addDef, int8, prefix, string, uint16, 
    int16, sortKey, struct, sorted, array
} = require('../helpers');

module.exports = () => {
    addDef('ScriptFragments', 
        struct('Script Fragments', [
            int8('Unknown'),
            prefix(2, string('FileName')),
            prefix(2, sorted(array('Fragments', 
                sortKey([0], struct('Fragment', [
                    uint16('Fragment Index'),
                    int16('Unknown'),
                    int8('Unknown'),
                    prefix(2, string('ScriptName')),
                    prefix(2, string('FragmentName'))
                ]))
            )))
        ])
    );
};