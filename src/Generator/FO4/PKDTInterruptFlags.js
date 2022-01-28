let {
    addDef, flags
} = require('../helpers');

module.exports = () => {
    addDef('PKDTInterruptFlags', 
        flags({
            0: 'Hellos to player',
            1: 'Random conversations',
            2: 'Observe combat behavior',
            3: 'Greet corpse behavior',
            4: 'Reaction to player actions',
            5: 'Friendly fire comments',
            6: 'Aggro Radius Behavior',
            7: 'Allow Idle Chatter',
            8: 'Unknown 9',
            9: 'World Interactions',
            10: 'Off For Important Scene',
            11: 'Unknown 12',
            12: 'Unknown 13',
            13: 'Unknown 14',
            14: 'Unknown 15',
            15: 'Unknown 16'
        })
    );
};