let {
    addDef, ckFormId, bytes, size, int32, 
    union, float, subrecord, sortKey, struct
} = require('../helpers');

module.exports = () => {
    addDef('COED', 
        subrecord('COED', sortKey([2], struct('Extra Data', [
            ckFormId('Owner', [
                'NPC_', 'FACT', 'NULL'
            ]),
            union('Global Variable / Required Rank', 'COEDOwnerDecider', [
                size(4, bytes('Unused')),
                ckFormId('Global Variable', ['GLOB', 'NULL']),
                int32('Required Rank')
            ]),
            float('Item Condition')
        ])))
    );
};