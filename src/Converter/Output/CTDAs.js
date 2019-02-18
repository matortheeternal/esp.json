let {
    addDef
} = require('../helpers');

module.exports = () => {
    addDef('CTDAs', 
        arrayOfStruct('Conditions', ref('lse')),
    );
};