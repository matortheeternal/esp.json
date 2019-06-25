let {
    addDef, def, sorted, arrayOfSubrecord, req
} = require('../helpers');

module.exports = () => {
    addDef('CNTOs', 
        req(sorted(arrayOfSubrecord('Items', 
            def('CNTO')
        )))
    );
};