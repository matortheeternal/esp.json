let {
    addDef, subrecord, ckFormId, req
} = require('../helpers');

module.exports = game => {
    addDef('ETYPReq', 
        req(subrecord('ETYP', ckFormId('Equipment Type', ['EQUP', 'NULL']))),
    );
};