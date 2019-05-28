let {
    addDef, int8, lenstring, uint16, int16, 
    sortKey, struct, array
} = require('../helpers');

module.exports = () => {
    addDef('ScriptFragments', struct('Script Fragments', [
        int8('Unknown'),
        lenstring('FileName'),
        array('Fragments', sortKey([0], struct('Fragment', [
            uint16('Fragment Index'),
            int16('Unknown'),
            int8('Unknown'),
            lenstring('ScriptName'),
            lenstring('FragmentName')
        ])), -2)
    ]));
};