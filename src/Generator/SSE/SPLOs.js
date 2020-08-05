let {
    addDef, def, sorted, memberArray, elementCounter, 
    req
} = require('../helpers');

module.exports = () => {
    addDef('SPLOs', 
        req(elementCounter('SPCT - Count', 
            sorted(memberArray('Actor Effects', 
                def('SPLO')
            ))
        ))
    );
};