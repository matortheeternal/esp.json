let {
    addDef, uint32, subrecord
} = require('../helpers');

module.exports = () => {
    addDef('COCT', 
        subrecord('COCT', uint32('Count'))
    );
};