let {
    addDef, def, float, sortKey, struct, 
    sorted, array, subrecord
} = require('../helpers');

module.exports = () => {
    addDef('PRPS', 
        subrecord('PRPS', sorted(array('Properties', 
            sortKey([0], struct('Property', [
                def('ActorValue'),
                float('Value')
            ]))
        )))
    );
};