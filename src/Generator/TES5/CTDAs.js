let {
    addDef, arrayOfStruct, def
} = require('../helpers');

module.exports = game => {
    addDef('CTDAs', 
        arrayOfStruct('Conditions', def('lse')),
    );
};