let {
    addDef, def, int32, format, ckFormId, 
    bytes, size, uint32, union, subrecord, 
    struct
} = require('../helpers');

module.exports = () => {
    addDef('PLVD', 
        subrecord('PLVD', struct('Location', [
            format(int32('Type'), def('LocationEnum')),
            union('Location Value', 'TypeDecider', [
                ckFormId('Reference', [
                    'NULL', 'DOOR', 'PLYR', 'ACHR', 'REFR',
                    'PGRE', 'PHZD', 'PMIS', 'PARW', 'PBAR',
                    'PBEA', 'PCON', 'PFLA'
                ]),
                ckFormId('Cell', ['NULL', 'CELL']),
                size(4, bytes('Near Package Start Location')),
                size(4, bytes('Near Editor Location')),
                ckFormId('Object ID', [
                    'NULL', 'ACTI', 'DOOR', 'STAT', 'MSTT',
                    'FURN', 'SPEL', 'SCRL', 'NPC_', 'CONT',
                    'ARMO', 'AMMO', 'MISC', 'WEAP', 'BOOK',
                    'KEYM', 'ALCH', 'INGR', 'LIGH', 'FACT',
                    'FLST', 'IDLM', 'SHOU'
                ]),
                format(uint32('Object Type'), def('ObjectTypeEnum')),
                ckFormId('Keyword', ['NULL', 'KYWD']),
                size(4, bytes('Unused')),
                format(int32('Alias'), def('PackageLocationAliasToStr')),
                format(int32('Reference'), def('PackageLocationAliasToStr')),
                size(4, bytes('Unknown')),
                size(4, bytes('Unknown')),
                size(4, bytes('Unknown'))
            ]),
            int32('Radius')
        ]))
    );
};