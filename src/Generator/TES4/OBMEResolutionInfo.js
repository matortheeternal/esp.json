let {
    addDef, enumeration
} = require('../helpers');

module.exports = () => {
    addDef('OBMEResolutionInfo', 
        enumeration({
            0: 'None',
            1: 'FormID',
            2: 'Magic Effect Code',
            3: 'Actor Value'
        })
    );
};