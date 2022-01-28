let {
    addDef, enumeration
} = require('../helpers');

module.exports = () => {
    addDef('KeywordTypeEnum', 
        enumeration({
            0: 'None',
            1: 'Component Tech Level',
            2: 'Attach Point',
            3: 'Component Property',
            4: 'Instantiation Filter',
            5: 'Mod Association',
            6: 'Sound',
            7: 'Anim Archetype',
            8: 'Function Call',
            9: 'Recipe Filter',
            10: 'Attraction Type',
            11: 'Dialogue Subtype',
            12: 'Quest Target',
            13: 'Anim Flavor',
            14: 'Anim Gender',
            15: 'Anim Face',
            16: 'Quest Group',
            17: 'Anim Injured',
            18: 'Dispel Effect'
        })
    );
};