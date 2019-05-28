let {
    addDef
} = require('../helpers');

module.exports = () => {
    addDef('SoundLevelEnum', {
        "0": "Loud",
        "1": "Normal",
        "2": "Silent",
        "3": "Very Loud"
    });
};