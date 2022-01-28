let {
    addDef, unknown, subrecord
} = require('../helpers');

module.exports = () => {
    addDef('MODF', 
        subrecord('MODF', unknown())
    );
};