let {
    addDef, string, subrecord, opts
} = require('../helpers');

module.exports = () => {
    addDef('EDID', 
        opts(subrecord('EDID', string('Editor ID')), {
            "keepCase": true
        })
    );
};