let {
    addDef
} = require('../helpers');

module.exports = () => {
    addDef('CTDAsCount', 
        arrayOfStruct('Conditions', ref('lse')),
    );
};