let {
    addDef, localized, string, subrecord, opts
} = require('../helpers');

module.exports = () => {
    addDef('FULL', 
        opts(subrecord('FULL', localized(string('Name'))), {
            "keepCase": true
        })
    );
};