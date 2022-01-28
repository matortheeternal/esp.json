let {
    addDef, float, subrecord
} = require('../helpers');

module.exports = () => {
    addDef('MO3C', 
        subrecord('MO3C', float('Color Remapping Index'))
    );
};