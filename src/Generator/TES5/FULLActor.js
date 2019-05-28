let {
    addDef, subrecord, lstringkc, req
} = require('../helpers');

module.exports = () => {
    addDef('FULLActor', req(subrecord('FULL', lstringkc(Name, 0))));
};