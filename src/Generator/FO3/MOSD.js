let {
    addDef, flags, uint8, format, subrecord
} = require('../helpers');

module.exports = () => {
    addDef('MOSD', 
        subrecord('MOSD', format(uint8('FaceGen Model Flags'), flags({
            0: 'Head',
            1: 'Torso',
            2: 'Right Hand',
            3: 'Left Hand'
        })))
    );
};