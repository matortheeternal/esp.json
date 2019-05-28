let {
    addDef, def, arrayOfSubrecord
} = require('../helpers');

module.exports = () => {
    addDef('CTDAs', arrayOfSubrecord('Conditions', def('CTDA')));
};