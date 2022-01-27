let {
    addDef, enumeration
} = require('../helpers');

module.exports = () => {
    addDef('PKDTType', 
        enumeration({
            0: 'Find',
            1: 'Follow',
            2: 'Escort',
            3: 'Eat',
            4: 'Sleep',
            5: 'Wander',
            6: 'Travel',
            7: 'Accompany',
            8: 'Use Item At',
            9: 'Ambush',
            10: 'Flee Not Combat',
            11: 'Package Type 11',
            12: 'Sandbox',
            13: 'Patrol',
            14: 'Guard',
            15: 'Dialogue',
            16: 'Use Weapon',
            17: 'Package Type 17',
            18: 'Combat Controller',
            19: 'Package Type 19',
            20: 'Package Type 20',
            21: 'Alarm',
            22: 'Flee',
            23: 'TressPass',
            24: 'Spectator',
            25: 'Package Type 25',
            26: 'Package Type 26',
            27: 'Package Type 27',
            28: 'Dialogue 2',
            29: 'Package Type 29',
            30: 'Package Type 30',
            31: 'Package Type 31',
            32: 'Package Type 32',
            33: 'Package Type 33',
            34: 'Package Type 34',
            35: 'Package Type 35',
            36: 'Package Type 36',
            37: 'Package Type 37',
            38: 'Package Type 38',
            39: 'Package Type 39',
            40: 'Package Type 40'
        })
    );
};