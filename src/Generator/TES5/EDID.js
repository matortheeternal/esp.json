let {
    addDef, subrecord, cstring
} = require('../helpers');

module.exports = () => {
    addDef('EDID', 
        subrecord('EDID', cstring('Editor ID'))
    );
};