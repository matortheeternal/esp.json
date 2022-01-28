let {
    addDef, unknown, subrecord
} = require('../helpers');

module.exports = () => {
    addDef('MO5F', 
        subrecord('MO5F', unknown())
    );
};