let {
    addDef, subrecord, lstringkc
} = require('../helpers');

module.exports = () => {
    addDef('FULL', subrecord('FULL', lstringkc(Name, 0)));
};