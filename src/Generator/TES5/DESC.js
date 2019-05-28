let {
    addDef, subrecord, lstringkc
} = require('../helpers');

module.exports = () => {
    addDef('DESC', subrecord('DESC', lstringkc(Description, 0)));
};