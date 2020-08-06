let {
    addDef, uint8, subrecord
} = require('../helpers');

module.exports = () => {
    addDef('LLCT', 
        subrecord('LLCT', uint8('Count'))
    );
};