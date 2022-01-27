let {
    addDef, ckFormId, subrecord
} = require('../helpers');

module.exports = () => {
    addDef('SCRIActor', 
        subrecord('SCRI', ckFormId('Script', ['SCPT']))
    );
};