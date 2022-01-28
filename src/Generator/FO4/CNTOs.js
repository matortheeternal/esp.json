let {
    addDef, def, sorted, memberArray, elementCounter
} = require('../helpers');

module.exports = () => {
    addDef('CNTOs', 
        elementCounter('COCT - Count', 
            sorted(memberArray('Items', 
                def('CNTO')
            ))
        )
    );
};