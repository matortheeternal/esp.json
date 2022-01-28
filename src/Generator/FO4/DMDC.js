let {
    addDef, float, subrecord
} = require('../helpers');

module.exports = () => {
    addDef('DMDC', 
        subrecord('DMDC', float('Color Remapping Index'))
    );
};