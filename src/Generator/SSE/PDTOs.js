let {
    addDef, def, memberArray, req
} = require('../helpers');

module.exports = () => {
    addDef('PDTOs', 
        req(memberArray('Topic', 
            def('PDTO')
        ))
    );
};