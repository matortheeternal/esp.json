let {
    addDef, def, sorted, memberArray, elementCounter, 
    req
} = require('../helpers');

module.exports = () => {
    addDef('CNTOs', 
        req(elementCounter('COCT - Count', 
            sorted(memberArray('Items', 
                def('CNTO')
            ))
        ))
    );
};