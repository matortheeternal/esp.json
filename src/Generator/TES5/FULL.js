let {
    addDef, localized, string, conflictType, subrecord, 
    opts
} = require('../helpers');

module.exports = () => {
    addDef('FULL', 
        opts(subrecord('FULL', conflictType('Translate', localized(string('Name')))), {
            "keepCase": true
        })
    );
};