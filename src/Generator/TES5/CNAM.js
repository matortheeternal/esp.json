let {
    addDef, uint8, bytes, subrecord, struct
} = require('../helpers');

module.exports = () => {
    addDef('CNAM', 
        subrecord('CNAM', struct('Color', [
            uint8('Red'),
            uint8('Green'),
            uint8('Blue'),
            bytes('Unknown', 1)
        ]))
    );
};