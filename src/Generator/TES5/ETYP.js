let {
    addDef, subrecord, ckFormId
} = require('../helpers');

module.exports = game => {
    addDef('ETYP', 
        subrecord('ETYP', ckFormId('Equipment Type', ['EQUP', 'NULL'])),
    );
};