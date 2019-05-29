let {
    addDef, subrecord, string
} = require('../helpers');

module.exports = () => {
    addDef('DESC', 
        subrecord('DESC', string('Description'))
    );
};