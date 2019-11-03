let {
    addDef, prefix, string, def, uint8, 
    format, enumeration, opts, int32, float, 
    array, union, sortKey, struct, sorted
} = require('../helpers');

module.exports = () => {
    addDef('ScriptProperties', 
        prefix(2, sorted(array('Properties', 
            sortKey([0], struct('Property', [
                prefix(2, string('propertyName')),
                format(uint8('Type'), def('PropTypeEnum')),
                opts(format(uint8('Flags'), enumeration({
                    0: '',
                    1: 'Edited',
                    2: '',
                    3: 'Removed'
                })), {
                    "defaultEditValue": "'Edited'"
                }),
                union('Value', 'ScriptPropertyDecider', [
                    def('Null'),
                    def('ScriptPropertyObject'),
                    opts(prefix(2, string('String')), {
                        "encoding": "EncodingVMAD"
                    }),
                    int32('Int32'),
                    float('Float'),
                    format(uint8('Bool'), enumeration({
                        0: 'False',
                        1: 'True'
                    })),
                    prefix(4, array('Array of Object', 
                        def('ScriptPropertyObject')
                    )),
                    prefix(4, array('Array of String', 
                        opts(prefix(2, string('Element')), {
                            "encoding": "EncodingVMAD"
                        })
                    )),
                    prefix(4, array('Array of Int32', 
                        int32('Element')
                    )),
                    prefix(4, array('Array of Float', 
                        float('Element')
                    )),
                    prefix(4, array('Array of Bool', 
                        format(uint8('Element'), enumeration({
                            0: 'False',
                            1: 'True'
                        }))
                    ))
                ])
            ]))
        )))
    );
};