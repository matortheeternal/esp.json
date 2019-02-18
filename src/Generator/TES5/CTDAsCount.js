let {
    addDef, arrayOfStruct, def
} = require('../helpers');

module.exports = game => {
    addDef('CTDAsCount', 
        arrayOfStruct('Conditions', def('lse')),
    );
};