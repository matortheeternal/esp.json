let {
    addDef, flags, uint32, format, subrecord
} = require('../helpers');

module.exports = () => {
    addDef('QUSTAliasFlags', 
        subrecord('FNAM', format(uint32('Flags'), flags({
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
            11: 'Forced by Aliases',
            12: 'Allow Destroyed',
            13: 'Matching Ref - Closest',
            14: 'Uses Stored Text',
            15: 'Initially Disabled',
            16: 'Allow Cleared',
            17: 'Clear Names When Removed',
            18: 'Matching Ref - Actors Only',
            19: 'Create Ref - Temp',
            20: 'External Alias - Linked',
            21: 'No Pickpocket',
            22: 'Can Apply Data To Non-Aliased Refs',
            23: 'Is Companion',
            24: 'Optional All Scenes'
        })))
    );
};