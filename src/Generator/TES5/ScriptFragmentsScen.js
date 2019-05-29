let {
    addDef, int8, uint8, format, string, 
    struct, array, int16, sortKey
} = require('../helpers');

module.exports = () => {
    addDef('ScriptFragmentsScen', 
        struct('Script Fragments', [
            int8('Unknown'),
            format(uint8('Flags'), {
                0: 'OnBegin',
                1: 'OnEnd'
            }),
            string('FileName'),
            array('Fragments', 
                struct('Fragment', [
                    int8('Unknown'),
                    string('ScriptName'),
                    string('FragmentName')
                ])
            ),
            array('Phase Fragments', 
                sortKey([0, 1], struct('Phase Fragment', [
                    format(uint8('Phase Flag'), {
                        0: 'OnStart',
                        1: 'OnCompletion'
                    }),
                    uint8('Phase Index'),
                    int16('Unknown'),
                    int8('Unknown'),
                    int8('Unknown'),
                    string('ScriptName'),
                    string('FragmentName')
                ]))
            , -2)
        ])
    );
};