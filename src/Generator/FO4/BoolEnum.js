let {
    addDef, enumeration
} = require('../helpers');

module.exports = () => {
    addDef('BoolEnum', 
        enumeration({
            0: 'False',
            1: 'True'
        })
    );
};