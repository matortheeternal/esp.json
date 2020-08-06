let {
    addDef, localized, string, subrecord, req, 
    opts
} = require('../helpers');

module.exports = () => {
    addDef('FULLActor', 
        opts(req(subrecord('FULL', localized(string('Name')))), {
            "keepCase": true
        })
    );
};