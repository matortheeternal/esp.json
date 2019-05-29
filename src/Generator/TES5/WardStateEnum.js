let {
    addDef
} = require('../helpers');

module.exports = () => {
    addDef('WardStateEnum', 
        {
            0: 'None',
            1: 'Absorb',
            2: 'Break'
        }
    );
};