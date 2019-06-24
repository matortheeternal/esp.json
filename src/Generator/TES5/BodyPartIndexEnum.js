let {
    addDef, enumeration
} = require('../helpers');

module.exports = () => {
    addDef('BodyPartIndexEnum', 
        enumeration({
            0: 'Body Texture'
        })
    );
};