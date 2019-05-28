let {
    addDef, subrecord, stringkc
} = require('../helpers');

module.exports = () => {
    addDef('EDID', subrecord('EDID', stringkc(Editor ID, 0)));
};