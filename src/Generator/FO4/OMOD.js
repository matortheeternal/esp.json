let {
    flags, def, uint32, bytes, size, 
    conflictType, enumeration, format, opts, ckFormId, 
    array, prefix, struct, uint8, customCounter, 
    subrecord, record
} = require('../helpers');

module.exports = () => {
    record('OMOD', 'Object Modification', {
        flags: flags({
            4: 'Legendary Mod',
            7: 'Mod Collection',
            12: 'Ignored'
        }),
        members: [
            def('EDID'),
            def('FULL'),
            def('DESC'),
            def('MODL'),
            opts(subrecord('DATA', struct('Data', [
                uint32('Include Count'),
                uint32('Property Count'),
                conflictType('Ignore', size(2, bytes('Unused'))),
                opts(format(uint32('Form Type'), enumeration({
                    ARMO: 'Armor',
                    NPC_: 'Non-player character',
                    WEAP: 'Weapon',
                    NONE: 'None'
                })), {
                    "defaultEditValue": "None"
                }),
                conflictType('Ignore', size(2, bytes('Unused'))),
                ckFormId('Attach Point', ['KYWD', 'NULL']),
                prefix(4, array('Attach Parent Slots', 
                    ckFormId('Keyword', ['KYWD', 'NULL'])
                )),
                prefix(4, array('Items', 
                    struct('Item', [
                        size(4, bytes('Value 1')),
                        size(4, bytes('Value 2'))
                    ])
                )),
                customCounter('OMODDataIncludeCounter', 
                    array('Includes', 
                        struct('Include', [
                            ckFormId('Mod', ['OMOD']),
                            uint8('Minimum Level'),
                            format(uint8('Optional'), def('BoolEnum')),
                            format(uint8('Don\'t Use All'), def('BoolEnum'))
                        ])
                    )
                ),
                def('ObjectModProperties')
            ])), {
                "afterSet": "OMODdataAfterSet"
            }),
            subrecord('MNAM', array('Target OMOD Keywords', 
                ckFormId('Keyword', ['KYWD'])
            )),
            subrecord('FNAM', array('Filter Keywords', 
                ckFormId('Keyword', ['KYWD'])
            )),
            subrecord('LNAM', ckFormId('Loose Mod', def('sigBaseObjects'))),
            subrecord('NAM1', uint8('Priority')),
            def('FLTR')
        ]
    })
};