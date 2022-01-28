let {
    addDef, enumeration
} = require('../helpers');

module.exports = () => {
    addDef('ArmorPropertyEnum', 
        enumeration({
            0: 'Enchantments',
            1: 'BashImpactDataSet',
            2: 'BlockMaterial',
            3: 'Keywords',
            4: 'Weight',
            5: 'Value',
            6: 'Rating',
            7: 'AddonIndex',
            8: 'BodyPart',
            9: 'DamageTypeValue',
            10: 'ActorValues',
            11: 'Health',
            12: 'ColorRemappingIndex',
            13: 'MaterialSwaps'
        })
    );
};