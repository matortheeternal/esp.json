let {
    addDef, flags, uint16, format, subrecord, 
    struct, req
} = require('../helpers');

module.exports = () => {
    addDef('QUSTAliasFlags', 
        req(subrecord('FNAM', struct('Alias Flags', [
            format(uint16('Flags'), flags({
                0: 'Reserves Location/Reference',
                1: 'Optional',
                2: 'Quest Object',
                3: 'Allow Reuse in Quest',
                4: 'Allow Dead',
                5: 'Matching Ref - In Loaded Area',
                6: 'Essential',
                7: 'Allow Disabled',
                8: 'Stores Text',
                9: 'Allow Reserved',
                10: 'Protected',
                11: 'Forced by Aliases?',
                12: 'Allow Destroyed',
                13: 'Matching Ref - Closest',
                14: 'Uses Stored Text',
                15: 'Initially Disabled'
            })),
            format(uint16('Additional Flags'), flags({
                0: 'Allow Cleared',
                1: 'Clear Names When Removed'
            }))
        ])))
    );
};