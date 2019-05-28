let {
    addDef, int8, uint8, lenstring, struct, 
    array
} = require('../helpers');

module.exports = () => {
    addDef('ScriptFragmentsInfo', struct('Script Fragments', [
        int8('Unknown'),
        uint8('Flags', {
            "0": "OnBegin",
            "1": "OnEnd"
        }),
        lenstring('FileName'),
        array('Fragments', struct('Fragment', [
            int8('Unknown'),
            lenstring('ScriptName'),
            lenstring('FragmentName')
        ]))
    ]));
};