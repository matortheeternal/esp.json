let {
    addDef, enumeration
} = require('../helpers');

module.exports = () => {
    addDef('CastEnum', 
        enumeration({
            0: 'Constant Effect',
            1: 'Fire and Forget',
            2: 'Concentration',
            3: 'Scroll'
        })
    );
};