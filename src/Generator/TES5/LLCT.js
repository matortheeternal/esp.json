let {
    addDef, uint8, conflict, subrecord
} = require('../helpers');

module.exports = () => {
    addDef('LLCT', 
        subrecord('LLCT', conflict('Benign', uint8('Count')))
    );
};