let {
    addDef, def, sorted, memberArray, elementCounter
} = require('../helpers');

module.exports = () => {
    addDef('CNTOsNoReach', 
        elementCounter('COCT - Count', 
            sorted(memberArray('Items', 
                def('CNTONoReach')
            ))
        )
    );
};