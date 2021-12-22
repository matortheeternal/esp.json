let {
    addDef, localized, string, conflict, subrecord, 
    opts
} = require('../helpers');

module.exports = () => {
    addDef('FULLActor', 
        opts(subrecord('FULL', conflict('Translate', localized(string('Name')))), {
            "keepCase": true
        })
    );
};