let {
    addDef, ckFormId, subrecord
} = require('../helpers');

module.exports = () => {
    addDef('EITM', 
        subrecord('EITM', ckFormId('Object Effect', ['ENCH', 'SPEL']))
    );
};