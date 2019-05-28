let {
    addDef, subrecord, uint32
} = require('../helpers');

module.exports = () => {
    addDef('CITC', subrecord('CITC', uint32('Condition Count')));
};