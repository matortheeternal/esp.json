let {
    addDef, int8, flags, uint8, format, 
    string, prefix, struct, array, customCounter
} = require('../helpers');

module.exports = () => {
    addDef('ScriptFragmentsInfo', 
        struct('Script Fragments', [
            int8('Unknown'),
            format(uint8('Flags'), flags({
                0: 'OnBegin',
                1: 'OnEnd'
            })),
            prefix(2, string('FileName')),
            customCounter('ScriptFragmentsInfoCounter', 
                array('Fragments', 
                    struct('Fragment', [
                        int8('Unknown'),
                        prefix(2, string('ScriptName')),
                        prefix(2, string('FragmentName'))
                    ])
                )
            )
        ])
    );
};