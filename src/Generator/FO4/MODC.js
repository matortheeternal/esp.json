let {
    addDef, float, subrecord
} = require('../helpers');

module.exports = () => {
    addDef('MODC', 
        subrecord('MODC', float('Color Remapping Index'))
    );
};