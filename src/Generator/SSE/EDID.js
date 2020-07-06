let {
    addDef, subrecord, string
} = require('../helpers');

module.exports = () => {
    addDef('EDID', 
        subrecord('EDID', string('Editor ID'))
    );
};