let {
    addDef, arrayOfStruct, def
} = require('../helpers');

module.exports = game => {
    addDef('CTDAsReq', 
        arrayOfStruct('Conditions', def('ue')),
    );
};