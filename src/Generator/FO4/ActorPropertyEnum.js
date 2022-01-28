let {
    addDef, enumeration
} = require('../helpers');

module.exports = () => {
    addDef('ActorPropertyEnum', 
        enumeration({
            0: 'Keywords',
            1: 'ForcedInventory',
            2: 'XPOffset',
            3: 'Enchantments',
            4: 'ColorRemappingIndex',
            5: 'MaterialSwaps'
        })
    );
};