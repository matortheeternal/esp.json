let {
    addDef, enumeration
} = require('../helpers');

module.exports = () => {
    addDef('WardStateEnum', 
        enumeration({
            0: 'None',
            1: 'Absorb',
            2: 'Break'
        })
    );
};