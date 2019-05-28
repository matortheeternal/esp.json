let {
    addDef, subrecord, string
} = require('../helpers');

module.exports = () => {
    addDef('FULL', subrecord('FULL', string('Name')));
};