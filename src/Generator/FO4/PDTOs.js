let {
    addDef, def, memberArray
} = require('../helpers');

module.exports = () => {
    addDef('PDTOs', 
        memberArray('Topic', 
            def('PDTO')
        )
    );
};