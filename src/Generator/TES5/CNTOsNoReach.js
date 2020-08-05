let {
    addDef, def, sorted, memberArray, elementCounter, 
    req
} = require('../helpers');

module.exports = () => {
    addDef('CNTOsNoReach', 
        req(elementCounter('COCT - Count', 
            sorted(memberArray('Items', 
                def('CNTONoReach')
            ))
        ))
    );
};