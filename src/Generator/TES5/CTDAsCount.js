let {
    addDef, def, arrayOfSubrecord
} = require('../helpers');

module.exports = () => {
    addDef('CTDAsCount', 
        arrayOfSubrecord('Conditions', 
            def('CTDA')
        )
    );
};