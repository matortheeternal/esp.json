let {
    addDef, def, sorted, arrayOfSubrecord, req
} = require('../helpers');

module.exports = () => {
    addDef('CNTOsNoReach', 
        req(sorted(arrayOfSubrecord('Items', 
            def('CNTONoReach')
        )))
    );
};