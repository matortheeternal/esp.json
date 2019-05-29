let {
    addDef
} = require('../helpers');

module.exports = () => {
    addDef('BlendOpEnum', 
        {
            0: '',
            1: 'Add',
            2: 'Subtract',
            3: 'Reverse Subtract',
            4: 'Minimum',
            5: 'Maximum'
        }
    );
};