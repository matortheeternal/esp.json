let {
    addDef, enumeration, uint32, format, subrecord, 
    string, float, array, opts, unknown, 
    sortKey, memberStruct, memberArray
} = require('../helpers');

module.exports = () => {
    addDef('BSMPSequence', 
        memberArray('Bone Data', 
            memberStruct('Data', [
                subrecord('BSMP', format(uint32('Gender'), enumeration({
                    0: 'Male',
                    1: 'Female'
                }))),
                memberArray('Bones', 
                    sortKey([0], memberStruct('Bone', [
                        subrecord('BSMB', string('Name')),
                        opts(subrecord('BSMS', array('Values', 
                            float('Value')
                        )), {
                            "notAlignable": 1
                        }),
                        subrecord('BMMP', unknown())
                    ]))
                )
            ])
        )
    );
};