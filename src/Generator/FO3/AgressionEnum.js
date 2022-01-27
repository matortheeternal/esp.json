let {
    addDef, enumeration
} = require('../helpers');

module.exports = () => {
    addDef('AgressionEnum', 
        enumeration({
            0: 'Unaggressive',
            1: 'Aggressive',
            2: 'Very Aggressive',
            3: 'Frenzied'
        })
    );
};