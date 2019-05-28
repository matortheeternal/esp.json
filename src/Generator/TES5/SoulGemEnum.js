let {
    addDef
} = require('../helpers');

module.exports = () => {
    addDef('SoulGemEnum', {
        "0": "None",
        "1": "Petty",
        "2": "Lesser",
        "3": "Common",
        "4": "Greater",
        "5": "Grand"
    });
};