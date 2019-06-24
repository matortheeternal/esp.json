let {
    addDef, subrecord, localized, string
} = require('../helpers');

module.exports = () => {
    addDef('FULL', 
        subrecord('FULL', localized(string('Name')))
    );
};