let {
    def, int32, ckFormId, union, float, 
    enumeration, uint32, format, struct, subrecord, 
    req, record
} = require('../helpers');

module.exports = () => {
    record('MISC', 'Misc. Item', {
        members: [
            def('EDID'),
            def('FULL'),
            def('MODL'),
            def('ICON'),
            def('SCRI'),
            req(subrecord('DATA', struct('', [
                union('', 'MISCActorValueDecider', [
                    int32('Value'),
                    ckFormId('Actor Value', ['ACVA'])
                ]),
                union('', 'MISCActorValueDecider', [
                    float('Weight'),
                    format(uint32('Group'), enumeration({
                        0: 'Attribute',
                        1065353216: 'Stat',
                        1073741824: 'Skill',
                        1077936128: 'AI',
                        1082130432: 'Social',
                        1084227584: 'Misc',
                        1086324736: 'Combat',
                        1088421888: ' [NONE]'
                    }))
                ])
            ])))
        ]
    })
};