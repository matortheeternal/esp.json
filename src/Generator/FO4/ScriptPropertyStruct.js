let {
    addDef, string, prefix, def, uint8, 
    format, opts, enumeration, int32, float, 
    recursive, array, union, sortKey, struct, 
    sorted
} = require('../helpers');

module.exports = () => {
    addDef('ScriptPropertyStruct', 
        prefix(4, sorted(array('Struct', 
            sortKey([0], struct('Member', [
                prefix(2, string('memberName')),
                opts(format(uint8('Type'), def('PropTypeEnum')), {
                    "afterSet": "ScriptPropertyTypeAfterSet"
                }),
                opts(format(uint8('Flags'), enumeration({
                    0: '',
                    1: 'Edited',
                    2: '',
                    3: 'Removed'
                })), {
                    "defaultValue": "Edited"
                }),
                union('Value', 'ScriptPropertyDecider', [
                    def('Null'),
                    def('ScriptPropertyObject'),
                    opts(prefix(2, string('String')), {
                        "encoding": "EncodingVMAD"
                    }),
                    int32('Int32'),
                    float('Float'),
                    format(uint8('Bool'), def('BoolEnum')),
                    recursive('Struct', 3),
                    recursive('Struct', 3),
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
                        format(uint8('Element'), def('BoolEnum'))
                    )),
                    prefix(4, array('Array of Struct', 
                        recursive('Struct', 4)
                    ))
                ])
            ]))
        )))
    );
};