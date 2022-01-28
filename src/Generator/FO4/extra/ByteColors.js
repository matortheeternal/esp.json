let {
    addDef, struct, bytes, uint8, size
} = require('../../helpers');

module.exports = () => {
    addDef('ByteColors',
        struct('', [
            uint8('Red'),
            uint8('Green'),
            uint8('Blue'),
            size(1, bytes('Unused'))
        ])
    );
};
