let {
    addDef
} = require('../helpers');

module.exports = () => {
    addDef('AlignmentEnum', {
        "0": "Good",
        "1": "Neutral",
        "2": "Evil",
        "3": "Very Good",
        "4": "Very Evil"
    });
};