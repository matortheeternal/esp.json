let {
    addDef, subrecord, uint32
} = require('../helpers');

module.exports = () => {
    addDef('COCT', 
        subrecord('COCT', uint32('Count'))
    );
};