let {
    addDef, enumeration, int32, format, ckFormId, 
    opts, def, uint32, formId, bytes, 
    size, conflict, union, struct
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
                5: 'Unknown 5',
                6: 'Self'
            })),
            union('Target', 'TypeDecider', [
                opts(ckFormId('Reference', [
                    'NULL', 'PLYR', 'ACHR', 'REFR', 'PGRE',
                    'PHZD', 'PMIS', 'PARW', 'PBAR', 'PBEA',
                    'PCON', 'PFLA'
                ]), {
                    "persistent": true
                }),
                ckFormId('Object ID', [
                    'NULL', 'ACTI', 'DOOR', 'STAT', 'MSTT',
                    'FURN', 'SPEL', 'SCRL', 'NPC_', 'CONT',
                    'ARMO', 'AMMO', 'MISC', 'WEAP', 'BOOK',
                    'KEYM', 'ALCH', 'INGR', 'LIGH', 'FACT',
                    'FLST', 'IDLM', 'SHOU', 'SOUN', 'TXST',
                    'PROJ'
                ]),
                format(uint32('Object Type'), def('ObjectTypeEnum')),
                formId('Reference'),
                format(int32('Alias'), def('PackageLocationAliasToStr')),
                conflict('Ignore', size(4, bytes('Unknown'))),
                conflict('Ignore', size(4, bytes('Unknown')))
            ]),
            int32('Count / Distance')
        ])
    );
};