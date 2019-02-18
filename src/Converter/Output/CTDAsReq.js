let {
    addDef
} = require('../helpers');

module.exports = () => {
    addDef('CTDAsReq', 
        arrayOfStruct('Conditions', ref('ue')),
    );
};