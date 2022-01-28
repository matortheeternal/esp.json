let {
    addDef, def, int32, format, ckFormId, 
    bytes, size, conflictType, uint32, union, 
    struct, subrecord
} = require('../helpers');

module.exports = () => {
    addDef('PLDT', 
        subrecord('PLDT', struct('Location', [
            format(int32('Type'), def('LocationEnum')),
            union('Location Value', 'TypeDecider', [
                ckFormId('Reference', def('sigReferences')),
                ckFormId('Cell', ['NULL', 'CELL']),
                conflictType('Ignore', size(4, bytes('Near Package Start Location'))),
                conflictType('Ignore', size(4, bytes('Near Editor Location'))),
                ckFormId('Object ID', [
                    'NULL', 'ACTI', 'DOOR', 'STAT', 'MSTT',
                    'FURN', 'SPEL', 'NPC_', 'CONT', 'ARMO',
                    'AMMO', 'MISC', 'WEAP', 'OMOD', 'BOOK',
                    'NOTE', 'KEYM', 'ALCH', 'INGR', 'LIGH',
                    'FACT', 'FLST', 'IDLM', 'TXST', 'PROJ'
                ]),
                format(uint32('Object Type'), def('ObjectTypeEnum')),
                ckFormId('Keyword', ['NULL', 'KYWD']),
                conflictType('Ignore', size(4, bytes('Unused'))),
                format(int32('Ref Alias'), def('PackageLocationAliasToStr')),
                format(int32('Loc Alias'), def('PackageLocationAliasToStr')),
                uint32('Interrupt Data'),
                uint32('Packdata Target'),
                conflictType('Ignore', size(4, bytes('Unknown'))),
                size(4, bytes('Unknown')),
                format(int32('Ref Collection Alias'), def('PackageLocationAliasToStr'))
            ]),
            int32('Radius'),
            uint32('Collection Index')
        ]))
    );
};