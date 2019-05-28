let {
    addDef
} = require('../helpers');

module.exports = () => {
    addDef('ArmorTypeEnum', {
        "0": "Light Armor",
        "1": "Heavy Armor",
        "2": "Clothing"
    });
};