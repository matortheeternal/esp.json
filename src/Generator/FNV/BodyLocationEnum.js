let {
    addDef, enumeration
} = require('../helpers');

module.exports = () => {
    addDef('BodyLocationEnum', 
        enumeration({
            0: 'Torso',
            1: 'Head 1',
            2: 'Head 2',
            3: 'Left Arm 1',
            4: 'Left Arm 2',
            5: 'Right Arm 1',
            6: 'Right Arm 2',
            7: 'Left Leg 1',
            8: 'Left Leg 2',
            9: 'Left Leg 3',
            10: 'Right Leg 1',
            11: 'Right Leg 2',
            12: 'Right Leg 3',
            13: 'Brain',
            "-1": 'None'
        })
    );
};