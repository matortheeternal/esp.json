let {
    addDef, int32, ckFormId, def, uint32, 
    formId, bytes, union, struct
} = require('../helpers');

module.exports = () => {
    addDef('TargetData', struct('Target Data', [
        int32('Type', {
            "0": "Specific Reference",
            "1": "Object ID",
            "2": "Object Type",
            "3": "Linked Reference",
            "4": "Ref Alias",
            "5": "Unknown 5",
            "6": "Self"
        }),
        union('Target', [
            ckFormId('Reference', ['NULL', 'PLYR', 'ACHR', 'REFR', 'PGRE', 'PHZD', 'PMIS', 'PARW', 'PBAR', 'PBEA', 'PCON', 'PFLA']),
            ckFormId('Object ID', ['NULL', 'ACTI', 'DOOR', 'STAT', 'MSTT', 'FURN', 'SPEL', 'SCRL', 'NPC_', 'CONT', 'ARMO', 'AMMO', 'MISC', 'WEAP', 'BOOK', 'KEYM', 'ALCH', 'INGR', 'LIGH', 'FACT', 'FLST', 'IDLM', 'SHOU', 'SOUN', 'TXST', 'PROJ']),
            uint32('Object Type', def('ObjectTypeEnum')),
            formId('Reference'),
            int32('Alias', def('PackageLocationAliasToStr')),
            bytes('Unknown', 4),
            bytes('Unknown', 4)
        ]),
        int32('Count / Distance')
    ]));
};