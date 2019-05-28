let {
    addDef, uint32
} = require('../helpers');

module.exports = () => {
    addDef('RecordFlags', uint32('Record Flags', {}));
};