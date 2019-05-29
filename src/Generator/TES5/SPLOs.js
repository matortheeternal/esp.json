let {
    addDef, def, arrayOfSubrecord, req
} = require('../helpers');

module.exports = () => {
    addDef('SPLOs', 
        req(arrayOfSubrecord('Actor Effects', 
            def('SPLO')
        ))
    );
};