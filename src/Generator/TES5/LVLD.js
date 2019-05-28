let {
    addDef, subrecord, uint8
} = require('../helpers');

module.exports = () => {
    addDef('LVLD', subrecord('LVLD', uint8('Chance None')));
};