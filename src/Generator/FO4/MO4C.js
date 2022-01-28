let {
    addDef, float, subrecord
} = require('../helpers');

module.exports = () => {
    addDef('MO4C', 
        subrecord('MO4C', float('Color Remapping Index'))
    );
};