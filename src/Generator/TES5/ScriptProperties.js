let {
    addDef, string, def, uint8, format, 
    opts, int32, float, array, union, 
    sortKey, struct
} = require('../helpers');

module.exports = () => {
    addDef('ScriptProperties', 
        array('Properties', 
            sortKey([0], struct('Property', [
                string('propertyName'),
                format(uint8('Type'), def('PropTypeEnum')),
                opts(format(uint8('Flags'), {
                    0: '',
                    1: 'Edited',
                    2: '',
                    3: 'Removed'
                }), {
                    "defaultEditValue": "'Edited'"
                }),
                union('Value', [
                    def('Null'),
                    def('ScriptPropertyObject'),
                    opts(string('String'), {
                        "encoding": "EncodingVMAD"
                    }),
                    int32('Int32'),
                    float('Float'),
                    format(uint8('Bool'), {
                        0: 'False',
                        1: 'True'
                    }),
                    array('Array of Object', 
                        def('ScriptPropertyObject')
                    , -1),
                    array('Array of String', 
                        opts(string('Element'), {
                            "encoding": "EncodingVMAD"
                        })
                    , -1),
                    array('Array of Int32', 
                        int32('Element')
                    , -1),
                    array('Array of Float', 
                        float('Element')
                    , -1),
                    array('Array of Bool', 
                        format(uint8('Element'), {
                            0: 'False',
                            1: 'True'
                        })
                    , -1)
                ])
            ]))
        , -2)
    );
};