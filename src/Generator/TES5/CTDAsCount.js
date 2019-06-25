let {
    addDef, def, memberArray
} = require('../helpers');

module.exports = () => {
    addDef('CTDAsCount', 
        memberArray('Conditions', 
            def('CTDA')
        )
    );
};