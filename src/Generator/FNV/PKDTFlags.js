let {
    addDef, flags
} = require('../helpers');

module.exports = () => {
    addDef('PKDTFlags', 
        flags({
            0: 'Offers Services',
            1: 'Must reach location',
            2: 'Must complete',
            3: 'Lock doors at package start',
            4: 'Lock doors at package end',
            5: 'Lock doors at location',
            6: 'Unlock doors at package start',
            7: 'Unlock doors at package end',
            8: 'Unlock doors at location',
            9: 'Continue if PC near',
            10: 'Once per day',
            11: '',
            12: 'Skip fallout behavior',
            13: 'Always run',
            14: '',
            15: '',
            16: '',
            17: 'Always sneak',
            18: 'Allow swimming',
            19: 'Allow falls',
            20: 'Head-Tracking off',
            21: 'Weapons unequipped',
            22: 'Defensive combat',
            23: 'Weapon Drawn',
            24: 'No idle anims',
            25: 'Pretend In Combat',
            26: 'Continue During Combat',
            27: 'No Combat Alert',
            28: 'No Warn/Attack Behaviour',
            29: '',
            30: '',
            31: ''
        })
    );
};