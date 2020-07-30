let {
    addDef, subrecord, localized, string, opts
} = require('../helpers');

module.exports = () => {
    addDef('FULL', 
        subrecord('FULL', opts(localized(string('Name')), {
            "keepCase": true
        }))
    );
};