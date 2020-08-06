let {
    addDef, bytes, subrecord
} = require('../helpers');

module.exports = () => {
    addDef('XRGD', 
        subrecord('XRGD', bytes('Ragdoll Data'))
    );
};