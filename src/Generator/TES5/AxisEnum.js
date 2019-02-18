let {
    addDef
} = require('../helpers');

module.exports = game => {
    addDef('AxisEnum', 
        {
            '88': 'X',
            '89': 'Y',
            '90': 'Z',
        }
    );
};