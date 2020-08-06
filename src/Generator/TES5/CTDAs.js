let {
    addDef, def, memberArray, req
} = require('../helpers');

module.exports = () => {
    addDef('CTDAs', 
        req(memberArray('Conditions', 
            def('CTDA')
        ))
    );
};