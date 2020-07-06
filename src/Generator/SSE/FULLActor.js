let {
    addDef, subrecord, localized, string, req
} = require('../helpers');

module.exports = () => {
    addDef('FULLActor', 
        req(subrecord('FULL', localized(string('Name'))))
    );
};