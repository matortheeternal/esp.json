let {
    addDef, subrecord, uint32
} = require('../helpers');

module.exports = () => {
    addDef('SPCT', 
        subrecord('SPCT', uint32('Count'))
    );
};