let {
    addDef, uint32, conflict, subrecord
} = require('../helpers');

module.exports = () => {
    addDef('COCT', 
        subrecord('COCT', conflict('Benign', uint32('Count')))
    );
};