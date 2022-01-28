let {
    addDef, def, uint32, format, subrecord, 
    req
} = require('../helpers');

module.exports = () => {
    addDef('EFID', 
        req(subrecord('EFID', format(uint32('Magic effect name'), def('Char4'))))
    );
};