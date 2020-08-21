let {
    addDef, def, sorted, memberArray, elementCounter
} = require('../helpers');

module.exports = () => {
    addDef('SPLOs', 
        elementCounter('SPCT - Count', 
            sorted(memberArray('Actor Effects', 
                def('SPLO')
            ))
        )
    );
};