let {
    addDef, bytes, subrecord
} = require('../helpers');

module.exports = () => {
    addDef('XRGB', 
        subrecord('XRGB', bytes('Ragdoll Biped Data'))
    );
};