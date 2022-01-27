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
            11: '',
            12: 'Sandbox',
            13: 'Patrol',
            14: 'Guard',
            15: 'Dialogue',
            16: 'Use Weapon'
        })
    );
};