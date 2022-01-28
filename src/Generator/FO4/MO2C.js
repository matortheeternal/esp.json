let {
    addDef, float, subrecord
} = require('../helpers');

module.exports = () => {
    addDef('MO2C', 
        subrecord('MO2C', float('Color Remapping Index'))
    );
};