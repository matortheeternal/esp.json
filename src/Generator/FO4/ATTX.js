let {
    addDef, localized, string, conflictType, subrecord, 
    opts
} = require('../helpers');

module.exports = () => {
    addDef('ATTX', 
        opts(subrecord('ATTX', conflictType('Translate', localized(string('Activate Text Override')))), {
            "transform": "keepcase"
        })
    );
};