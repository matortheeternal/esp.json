let {
    addDef
} = require('../helpers');

module.exports = game => {
    addDef('CastEnum', 
        {
            '0': 'Constant Effect',
            '1': 'Fire and Forget',
            '2': 'Concentration',
            '3': 'Scroll',
        }
    );
};