let {
    addDef, subrecord, localized, string
} = require('../helpers');

module.exports = () => {
    addDef('DESC', 
        subrecord('DESC', localized(string('Description')))
    );
};