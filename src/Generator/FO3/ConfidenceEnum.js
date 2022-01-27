let {
    addDef, enumeration
} = require('../helpers');

module.exports = () => {
    addDef('ConfidenceEnum', 
        enumeration({
            0: 'Cowardly',
            1: 'Cautious',
            2: 'Average',
            3: 'Brave',
            4: 'Foolhardy'
        })
    );
};