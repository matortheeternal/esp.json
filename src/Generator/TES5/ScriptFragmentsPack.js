let {
    addDef, int8, uint8, format, string, 
    struct, array
} = require('../helpers');

module.exports = () => {
    addDef('ScriptFragmentsPack', 
        struct('Script Fragments', [
            int8('Unknown'),
            format(uint8('Flags'), {
                0: 'OnBegin',
                1: 'OnEnd',
                2: 'OnChange'
            }),
            string('FileName'),
            array('Fragments', 
                struct('Fragment', [
                    int8('Unknown'),
                    string('ScriptName'),
                    string('FragmentName')
                ])
            )
        ])
    );
};