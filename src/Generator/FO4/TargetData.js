let {
    addDef, enumeration, int32, format, def, 
    ckFormId, opts, uint32, bytes, size, 
    conflictType, union, struct
} = require('../helpers');

module.exports = () => {
    addDef('TargetData', 
        struct('Target Data', [
            format(int32('Type'), enumeration({
                0: 'Specific Reference',
                1: 'Object ID',
                2: 'Object Type',
                3: 'Linked Reference',
                4: 'Ref Alias',
                5: 'Interrupt Data',
                6: 'Self',
                7: 'Keyword',
                8: 'Unknown 8'
            })),
            union('Target', 'TypeDecider', [
                opts(ckFormId('Reference', def('sigReferences')), {
                    "persistent": true
                }),
                ckFormId('Object ID', [
                    'NULL', 'ACTI', 'DOOR', 'STAT', 'MSTT',
                    'FURN', 'SPEL', 'NPC_', 'CONT', 'ARMO',
                    'AMMO', 'MISC', 'WEAP', 'OMOD', 'BOOK',
                    'NOTE', 'KEYM', 'ALCH', 'INGR', 'LIGH',
                    'FACT', 'FLST', 'IDLM', 'TXST', 'PROJ'
                ]),
                format(uint32('Object Type'), def('ObjectTypeEnum')),
                ckFormId('Keyword', ['KYWD', 'NULL']),
                format(int32('Alias'), def('PackageLocationAliasToStr')),
                uint32('Interrupt Data'),
                conflictType('Ignore', size(4, bytes('Unknown'))),
                ckFormId('Keyword', ['KYWD', 'NULL']),
                conflictType('Ignore', size(4, bytes('Unknown')))
            ]),
            int32('Count / Distance')
        ])
    );
};