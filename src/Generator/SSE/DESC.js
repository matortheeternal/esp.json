let {
    addDef, localized, string, conflict, subrecord, 
    opts
} = require('../helpers');

module.exports = () => {
    addDef('DESC', 
        opts(subrecord('DESC', conflict('Translate', localized(string('Description')))), {
            "keepCase": true
        })
    );
};