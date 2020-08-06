let {
    addDef, enumeration, int32, format, req, 
    ckFormId, def, uint32, formId, bytes, 
    size, union, struct
} = require('../helpers');

module.exports = () => {
    addDef('TargetData', 
        struct('Target Data', [
            req(format(int32('Type'), enumeration({
                0: 'Specific Reference',
                1: 'Object ID',
                2: 'Object Type',
                3: 'Linked Reference',
                4: 'Ref Alias',
                5: 'Unknown 5',
                6: 'Self'
            }))),
            union('Target', 'TypeDecider', [
                ckFormId('Reference', [
                    'NULL', 'PLYR', 'ACHR', 'REFR', 'PGRE',
                    'PHZD', 'PMIS', 'PARW', 'PBAR', 'PBEA',
                    'PCON', 'PFLA'
                ]),
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
                size(4, bytes('Unknown')),
                size(4, bytes('Unknown'))
            ]),
            int32('Count / Distance')
        ])
    );
};