let {
    addDef, subrecord, localized, string, opts
} = require('../helpers');

module.exports = () => {
    addDef('DESC', 
        subrecord('DESC', opts(localized(string('Description')), {
            "keepCase": true
        }))
    );
};