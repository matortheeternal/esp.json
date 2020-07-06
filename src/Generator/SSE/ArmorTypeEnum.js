let {
    addDef, enumeration
} = require('../helpers');

module.exports = () => {
    addDef('ArmorTypeEnum', 
        enumeration({
            0: 'Light Armor',
            1: 'Heavy Armor',
            2: 'Clothing'
        })
    );
};