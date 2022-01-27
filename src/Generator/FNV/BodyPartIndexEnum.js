let {
    addDef, enumeration
} = require('../helpers');

module.exports = () => {
    addDef('BodyPartIndexEnum', 
        enumeration({
            0: 'Upper Body',
            1: 'Left Hand',
            2: 'Right Hand',
            3: 'Upper Body Texture'
        })
    );
};