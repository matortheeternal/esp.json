let {
    addDef, ckFormId, bytes, size, conflictType, 
    int32, union, float, sortKey, struct, 
    subrecord
} = require('../helpers');

module.exports = () => {
    addDef('COED', 
        subrecord('COED', sortKey([2], struct('Extra Data', [
            ckFormId('Owner', [
                'NPC_', 'FACT', 'NULL'
            ]),
            union('Global Variable / Required Rank', 'COEDOwnerDecider', [
                conflictType('Ignore', size(4, bytes('Unused'))),
                ckFormId('Global Variable', ['GLOB', 'NULL']),
                int32('Required Rank')
            ]),
            float('Item Condition')
        ])))
    );
};