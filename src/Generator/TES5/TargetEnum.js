let {
    addDef, enumeration
} = require('../helpers');

module.exports = () => {
    addDef('TargetEnum', 
        enumeration({
            0: 'Self',
            1: 'Touch',
            2: 'Aimed',
            3: 'Target Actor',
            4: 'Target Location'
        })
    );
};