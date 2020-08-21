let {
    addDef, localized, string, subrecord, opts
} = require('../helpers');

module.exports = () => {
    addDef('FULLActor', 
        opts(subrecord('FULL', localized(string('Name'))), {
            "keepCase": true
        })
    );
};