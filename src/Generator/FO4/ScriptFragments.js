let {
    addDef, int8, def, uint16, int16, 
    conflictType, string, prefix, sortKey, struct, 
    sorted, array
} = require('../helpers');

module.exports = () => {
    addDef('ScriptFragments', 
        struct('Script Fragments', [
            int8('Unknown'),
            def('ScriptEntry'),
            prefix(2, sorted(array('Fragments', 
                sortKey([0], struct('Fragment', [
                    uint16('Fragment Index'),
                    conflictType('Ignore', int16('Unused')),
                    int8('Unknown'),
                    prefix(2, string('ScriptName')),
                    prefix(2, string('FragmentName'))
                ]))
            )))
        ])
    );
};