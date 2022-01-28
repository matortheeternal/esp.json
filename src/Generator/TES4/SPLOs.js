let {
    addDef, def, sorted, memberArray
} = require('../helpers');

module.exports = () => {
    addDef('SPLOs', 
        sorted(memberArray('Spells', 
            def('SPLO')
        ))
    );
};