let {
    addDef, enumeration
} = require('../helpers');

module.exports = () => {
    addDef('SpecializationEnum', 
        enumeration({
            0: 'Combat',
            1: 'Magic',
            2: 'Stealth'
        })
    );
};