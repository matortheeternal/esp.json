let {
    addDef, int8, uint8, format, prefixLength, 
    string, struct, array
} = require('../helpers');

module.exports = () => {
    addDef('ScriptFragmentsInfo', 
        struct('Script Fragments', [
            int8('Unknown'),
            format(uint8('Flags'), {
                0: 'OnBegin',
                1: 'OnEnd'
            }),
            prefixLength(2, string('FileName')),
            array('Fragments', 
                struct('Fragment', [
                    int8('Unknown'),
                    prefixLength(2, string('ScriptName')),
                    prefixLength(2, string('FragmentName'))
                ])
            )
        ])
    );
};