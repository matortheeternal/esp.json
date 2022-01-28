let {
    addDef, enumeration
} = require('../helpers');

module.exports = () => {
    addDef('MagicSchoolEnum', 
        enumeration({
            0: 'Alteration',
            1: 'Conjuration',
            2: 'Destruction',
            3: 'Illusion',
            4: 'Mysticism',
            5: 'Restoration'
        })
    );
};