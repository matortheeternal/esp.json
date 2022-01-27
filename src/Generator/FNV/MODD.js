let {
    addDef, flags, uint8, format, subrecord
} = require('../helpers');

module.exports = () => {
    addDef('MODD', 
        subrecord('MODD', format(uint8('FaceGen Model Flags'), flags({
            0: 'Head',
            1: 'Torso',
            2: 'Right Hand',
            3: 'Left Hand'
        })))
    );
};