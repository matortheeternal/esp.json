let {
    addDef, subrecord, uint8, format
} = require('../helpers');

module.exports = () => {
    addDef('MODD', subrecord('MODD', format(uint8('FaceGen Model Flags'), {
        "0": "Head",
        "1": "Torso",
        "2": "Right Hand",
        "3": "Left Hand"
    })));
};