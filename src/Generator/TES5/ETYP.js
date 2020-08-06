let {
    addDef, ckFormId, subrecord
} = require('../helpers');

module.exports = () => {
    addDef('ETYP', 
        subrecord('ETYP', ckFormId('Equipment Type', ['EQUP', 'NULL']))
    );
};