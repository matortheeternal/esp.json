let {
    addDef, uint32, conflict, subrecord
} = require('../helpers');

module.exports = () => {
    addDef('CITC', 
        subrecord('CITC', conflict('Benign', uint32('Condition Count')))
    );
};