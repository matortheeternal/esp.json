let {
    addDef, int8, prefixLength, string, uint16, 
    int16, sortKey, struct, array
} = require('../helpers');

module.exports = () => {
    addDef('ScriptFragments', 
        struct('Script Fragments', [
            int8('Unknown'),
            prefixLength(2, string('FileName')),
            array('Fragments', 
                sortKey([0], struct('Fragment', [
                    uint16('Fragment Index'),
                    int16('Unknown'),
                    int8('Unknown'),
                    prefixLength(2, string('ScriptName')),
                    prefixLength(2, string('FragmentName'))
                ]))
            , -2)
        ])
    );
};