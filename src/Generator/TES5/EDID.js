let {
    addDef, subrecord, string, opts
} = require('../helpers');

module.exports = () => {
    addDef('EDID', 
        subrecord('EDID', opts(string('Editor ID'), {
            "keepCase": true
        }))
    );
};