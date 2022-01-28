let {
    addDef, unknown, subrecord
} = require('../helpers');

module.exports = () => {
    addDef('MO4F', 
        subrecord('MO4F', unknown())
    );
};