let {
    addDef, uint32, conflict, subrecord
} = require('../helpers');

module.exports = () => {
    addDef('SPCT', 
        subrecord('SPCT', conflict('Benign', uint32('Count')))
    );
};