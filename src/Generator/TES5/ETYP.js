let {
    addDef, subrecord, ckFormId
} = require('../helpers');

module.exports = () => {
    addDef('ETYP', 
        subrecord('ETYP', ckFormId('Equipment Type', ['EQUP', 'NULL'])),
    );
};