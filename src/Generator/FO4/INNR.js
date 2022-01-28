let {
    def, enumeration, uint32, format, subrecord, 
    localized, string, conflictType, opts, float, 
    uint8, struct, uint16, memberStruct, memberArray, 
    elementCounter, record
} = require('../helpers');

module.exports = () => {
    record('INNR', 'Instance Naming Rules', {
        members: [
            def('EDID'),
            subrecord('UNAM', format(uint32('Target'), enumeration({
                0: 'None',
                29: 'Armor',
                42: 'Furniture',
                43: 'Weapon',
                45: 'Actor'
            }))),
            memberArray('Naming Rules', 
                memberStruct('Ruleset', [
                    subrecord('VNAM', uint32('Count')),
                    elementCounter('VNAM - Count', 
                        memberArray('Names', 
                            memberStruct('Name', [
                                opts(subrecord('WNAM', conflictType('Translate', localized(string('Text')))), {
                                    "keepCase": true
                                }),
                                def('KSIZ'),
                                def('KWDAs'),
                                subrecord('XNAM', struct('Property', [
                                    float('Value'),
                                    format(uint8('Target'), enumeration({
                                        0: 'Enchantments',
                                        1: 'BashImpactDataSet',
                                        2: 'BlockMaterial',
                                        3: 'Keywords',
                                        4: 'Weight',
                                        5: 'Value',
                                        6: 'Rating',
                                        7: 'AddonIndex',
                                        8: 'BodyPart',
                                        9: 'DamageTypeValues',
                                        10: 'ActorValues',
                                        11: 'Health',
                                        12: 'ColorRemappingIndex',
                                        13: 'MaterialSwaps'
                                    })),
                                    format(uint8('Op'), enumeration({
                                        0: '>=',
                                        1: '>',
                                        2: '<=',
                                        3: '<',
                                        4: '='
                                    }))
                                ])),
                                subrecord('YNAM', uint16('Index'))
                            ])
                        )
                    )
                ])
            )
        ]
    })
};