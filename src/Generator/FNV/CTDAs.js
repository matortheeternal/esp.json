let {
    addDef, def, memberArray
} = require('../helpers');

module.exports = () => {
    addDef('CTDAs', 
        memberArray('Conditions', 
            def('CTDA')
        )
    );
};