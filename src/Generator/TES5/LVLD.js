let {
    addDef, uint8, subrecord, req
} = require('../helpers');

module.exports = () => {
    addDef('LVLD', 
        req(subrecord('LVLD', uint8('Chance None')))
    );
};