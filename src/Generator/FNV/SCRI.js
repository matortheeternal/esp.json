let {
    addDef, ckFormId, subrecord
} = require('../helpers');

module.exports = () => {
    addDef('SCRI', 
        subrecord('SCRI', ckFormId('Script', ['SCPT']))
    );
};