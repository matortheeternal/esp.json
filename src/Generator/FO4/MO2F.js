let {
    addDef, unknown, subrecord
} = require('../helpers');

module.exports = () => {
    addDef('MO2F', 
        subrecord('MO2F', unknown())
    );
};