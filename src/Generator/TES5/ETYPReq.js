let {
    addDef, subrecord, ckFormId, req
} = require('../helpers');

module.exports = () => {
    addDef('ETYPReq', 
        req(subrecord('ETYP', ckFormId('Equipment Type', ['EQUP', 'NULL']))),
    );
};