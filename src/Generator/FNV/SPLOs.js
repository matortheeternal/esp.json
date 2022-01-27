let {
    addDef, def, sorted, memberArray
} = require('../helpers');

module.exports = () => {
    addDef('SPLOs', 
        sorted(memberArray('Actor Effects', 
            def('SPLO')
        ))
    );
};