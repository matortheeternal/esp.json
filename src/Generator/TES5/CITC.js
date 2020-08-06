let {
    addDef, uint32, subrecord
} = require('../helpers');

module.exports = () => {
    addDef('CITC', 
        subrecord('CITC', uint32('Condition Count'))
    );
};