let {
    addDef, ckFormId, subrecord
} = require('../helpers');

module.exports = () => {
    addDef('FTYP', 
        subrecord('FTYP', ckFormId('Forced Loc Ref Type', ['LCRT']))
    );
};