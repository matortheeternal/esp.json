let {
    req, def, int32, format, uint32, 
    ckFormId, struct, subrecord, memberArray, memberStruct, 
    record
} = require('../helpers');

module.exports = () => {
    record('RCPE', 'Recipe', {
        members: [
            req(def('EDID')),
            def('FULL'),
            def('CTDAs'),
            subrecord('DATA', struct('Data', [
                format(int32('Skill'), def('ActorValueEnum')),
                uint32('Level'),
                ckFormId('Category', ['RCCT', 'NULL']),
                ckFormId('Sub-Category', ['RCCT'])
            ])),
            memberArray('Ingredients', 
                memberStruct('Ingredient', [
                    req(subrecord('RCIL', ckFormId('Item', [
                        'ARMO', 'AMMO', 'MISC', 'WEAP', 'BOOK',
                        'KEYM', 'ALCH', 'NOTE', 'IMOD', 'CMNY',
                        'CCRD', 'CHIP', 'LIGH'
                    ]))),
                    req(subrecord('RCQY', uint32('Quantity')))
                ])
            ),
            memberArray('Outputs', 
                memberStruct('Output', [
                    req(subrecord('RCOD', ckFormId('Item', [
                        'ARMO', 'AMMO', 'MISC', 'WEAP', 'BOOK',
                        'KEYM', 'ALCH', 'NOTE', 'IMOD', 'CMNY',
                        'CCRD', 'CHIP', 'LIGH'
                    ]))),
                    req(subrecord('RCQY', uint32('Quantity')))
                ])
            )
        ]
    })
};