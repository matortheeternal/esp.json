let {
    addDef, def, memberArray, elementCounter
} = require('../helpers');

module.exports = () => {
    addDef('CTDAsCount', 
        elementCounter('CITC - Condition Count', 
            memberArray('Conditions', 
                def('CTDA')
            )
        )
    );
};