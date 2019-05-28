let {
    addDef, subrecord, string, req
} = require('../helpers');

module.exports = () => {
    addDef('FULLActor', req(subrecord('FULL', string('Name'))));
};