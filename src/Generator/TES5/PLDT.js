let {
    addDef, def, int32, format, ckFormId, 
    bytes, uint32, union, subrecord, struct
} = require('../helpers');

module.exports = () => {
    addDef('PLDT', 
        subrecord('PLDT', struct('Location', [
            format(int32('Type'), def('LocationEnum')),
            union('Location Value', [
                ckFormId('Reference', [
                    'NULL',    'DOOR',    'PLYR',    'ACHR',    'REFR',
                    'PGRE',    'PHZD',    'PMIS',    'PARW',    'PBAR',
                    'PBEA',    'PCON',    'PFLA'
                ]),
                ckFormId('Cell', ['NULL', 'CELL']),
                bytes('Near Package Start Location', 4),
                bytes('Near Editor Location', 4),
                ckFormId('Object ID', [
                    'NULL',    'ACTI',    'DOOR',    'STAT',    'MSTT',
                    'FURN',    'SPEL',    'SCRL',    'NPC_',    'CONT',
                    'ARMO',    'AMMO',    'MISC',    'WEAP',    'BOOK',
                    'KEYM',    'ALCH',    'LIGH',    'FACT',    'FLST',
                    'IDLM',    'SHOU'
                ]),
                format(uint32('Object Type'), def('ObjectTypeEnum')),
                ckFormId('Keyword', ['NULL', 'KYWD']),
                bytes('Unused', 4),
                format(int32('Alias'), def('PackageLocationAliasToStr')),
                format(int32('Reference'), def('PackageLocationAliasToStr')),
                bytes('Unknown', 4),
                bytes('Unknown', 4),
                bytes('Unknown', 4)
            ]),
            int32('Radius')
        ]))
    );
};