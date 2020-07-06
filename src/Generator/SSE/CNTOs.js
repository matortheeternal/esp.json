let {
    addDef, def, sorted, memberArray, req
} = require('../helpers');

module.exports = () => {
    addDef('CNTOs', 
        req(sorted(memberArray('Items', 
            def('CNTO')
        )))
    );
};