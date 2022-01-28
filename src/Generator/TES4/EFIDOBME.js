let {
    addDef, mgefCode, size, subrecord, req
} = require('../helpers');

module.exports = () => {
    addDef('EFIDOBME', 
        req(subrecord('EFID', size(4, mgefCode('Magic Effect Code'))))
    );
};