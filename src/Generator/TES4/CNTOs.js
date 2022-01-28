let {
    addDef, def, sorted, memberArray
} = require('../helpers');

module.exports = () => {
    addDef('CNTOs', 
        sorted(memberArray('Items', 
            def('CNTO')
        ))
    );
};