let {
    addDef, string, subrecord
} = require('../helpers');

module.exports = () => {
    addDef('EDID', 
        subrecord('EDID', string('Editor ID'))
    );
};