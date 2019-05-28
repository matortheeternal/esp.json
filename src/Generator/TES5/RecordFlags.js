let {
    addDef, uint32, format
} = require('../helpers');

module.exports = () => {
    addDef('RecordFlags', format(uint32('Record Flags'), {}));
};