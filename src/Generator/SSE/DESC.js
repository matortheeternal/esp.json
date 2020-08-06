let {
    addDef, localized, string, subrecord, opts
} = require('../helpers');

module.exports = () => {
    addDef('DESC', 
        opts(subrecord('DESC', localized(string('Description'))), {
            "keepCase": true
        })
    );
};