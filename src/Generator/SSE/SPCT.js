let {
    addDef, uint32, subrecord
} = require('../helpers');

module.exports = () => {
    addDef('SPCT', 
        subrecord('SPCT', uint32('Count'))
    );
};