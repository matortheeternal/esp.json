let {
    addDef, string, subrecord
} = require('../helpers');

module.exports = () => {
    addDef('FLTR', 
        subrecord('FLTR', string('Filter'))
    );
};