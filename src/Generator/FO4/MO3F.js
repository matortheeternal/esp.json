let {
    addDef, unknown, subrecord
} = require('../helpers');

module.exports = () => {
    addDef('MO3F', 
        subrecord('MO3F', unknown())
    );
};