let {
    addDef, def, arrayOfSubrecord, req
} = require('../helpers');

module.exports = () => {
    addDef('CNTOsNoReach', 
        req(arrayOfSubrecord('Items', 
            def('CNTONoReach')
        ))
    );
};