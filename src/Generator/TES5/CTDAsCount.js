let {
    addDef, def, memberArray, elementCounter, req
} = require('../helpers');

module.exports = () => {
    addDef('CTDAsCount', 
        req(elementCounter('CITC - Condition Count', 
            memberArray('Conditions', 
                def('CTDA')
            )
        ))
    );
};