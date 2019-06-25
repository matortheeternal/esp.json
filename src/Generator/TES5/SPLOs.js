let {
    addDef, def, sorted, arrayOfSubrecord, req
} = require('../helpers');

module.exports = () => {
    addDef('SPLOs', 
        req(sorted(arrayOfSubrecord('Actor Effects', 
            def('SPLO')
        )))
    );
};