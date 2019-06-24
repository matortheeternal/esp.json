let {
    flags, def, req, subrecord, ckFormId, 
    uint8, struct, float, record
} = require('../helpers');

module.exports = () => {
    record('TREE', 'Tree', {
        flags: flags({
            15: 'Has Distant LOD'
        }),
        members: [
            def('EDID'),
            def('VMAD'),
            req(def('OBND')),
            def('MODL'),
            subrecord('PFIG', ckFormId('Ingredient', [
                'INGR',    'ALCH',    'MISC',    'LVLI',    'NULL'
            ])),
            subrecord('SNAM', ckFormId('Harvest Sound', ['SNDR', 'NULL'])),
            subrecord('PFPC', struct('Ingredient Production', [
                uint8('Spring'),
                uint8('Summer'),
                uint8('Fall'),
                uint8('Winter')
            ])),
            def('FULL'),
            req(subrecord('CNAM', struct('Tree Data', [
                float('Trunk Flexibility'),
                float('Branch Flexibility'),
                float('Unknown'),
                float('Unknown'),
                float('Unknown'),
                float('Unknown'),
                float('Unknown'),
                float('Unknown'),
                float('Unknown'),
                float('Unknown'),
                float('Leaf Amplitude'),
                float('Leaf Frequency')
            ])))
        ]
    })
};