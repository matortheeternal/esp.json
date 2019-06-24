let {
    addDef, enumeration
} = require('../helpers');

module.exports = () => {
    addDef('BlendOpEnum', 
        enumeration({
            0: '',
            1: 'Add',
            2: 'Subtract',
            3: 'Reverse Subtract',
            4: 'Minimum',
            5: 'Maximum'
        })
    );
};