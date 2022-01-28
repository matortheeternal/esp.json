let {
    addDef, flags
} = require('../helpers');

module.exports = () => {
    addDef('PKDTFlags', 
        flags({
            0: 'Offers Services',
            1: 'Unknown 2',
            2: 'Must complete',
            3: 'Maintain Speed at Goal',
            4: 'Treat As Player Follower',
            5: 'Unknown 6',
            6: 'Unlock doors at package start',
            7: 'Unlock doors at package end',
            8: 'Request Block Idles',
            9: 'Continue if PC Near',
            10: 'Once per day',
            11: 'Unknown 12',
            12: 'Skip Load Into Furniture',
            13: 'Preferred Speed',
            14: 'Unknown 15',
            15: 'Unknown 16',
            16: 'Unknown 17',
            17: 'Always Sneak',
            18: 'Allow Swimming',
            19: 'Unknown 20',
            20: 'Ignore Combat',
            21: 'Weapons Unequipped',
            22: 'Unknown 23',
            23: 'Weapon Drawn',
            24: 'Unknown 25',
            25: 'Unknown 26',
            26: 'Unknown 27',
            27: 'No Combat Alert',
            28: 'Unknown 29',
            29: 'Wear Sleep Outfit',
            30: 'Unknown 31',
            31: 'Unknown 32'
        })
    );
};