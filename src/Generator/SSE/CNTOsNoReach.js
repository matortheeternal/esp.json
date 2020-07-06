let {
    addDef, def, sorted, memberArray, req
} = require('../helpers');

module.exports = () => {
    addDef('CNTOsNoReach', 
        req(sorted(memberArray('Items', 
            def('CNTONoReach')
        )))
    );
};