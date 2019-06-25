let {
    addDef, def, sorted, memberArray, req
} = require('../helpers');

module.exports = () => {
    addDef('SPLOs', 
        req(sorted(memberArray('Actor Effects', 
            def('SPLO')
        )))
    );
};