let {
    addDef, localized, string, conflictType, subrecord, 
    opts
} = require('../helpers');

module.exports = () => {
    addDef('DESC', 
        opts(subrecord('DESC', conflictType('Translate', localized(string('Description')))), {
            "transform": "keepcase"
        })
    );
};