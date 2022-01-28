let {
    addDef, float, subrecord
} = require('../helpers');

module.exports = () => {
    addDef('MO5C', 
        subrecord('MO5C', float('Color Remapping Index'))
    );
};