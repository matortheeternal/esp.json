let {
    addDef, def, arrayOfSubrecord, req
} = require('../helpers');

module.exports = () => {
    addDef('CNTOs', req(arrayOfSubrecord('Items', def('CNTO'))));
};