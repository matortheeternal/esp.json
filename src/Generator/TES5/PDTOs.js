let {
    addDef, def, arrayOfSubrecord
} = require('../helpers');

module.exports = () => {
    addDef('PDTOs', 
        arrayOfSubrecord('Topic', 
            def('PDTO')
        )
    );
};