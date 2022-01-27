let {
    addDef, def, sorted, memberArray
} = require('../helpers');

module.exports = () => {
    addDef('XNAMs', 
        sorted(memberArray('Relations', 
            def('XNAM')
        ))
    );
};