let {
    addDef, subrecord, localized, string, opts, 
    req
} = require('../helpers');

module.exports = () => {
    addDef('FULLActor', 
        req(subrecord('FULL', opts(localized(string('Name')), {
            "keepCase": true
        })))
    );
};