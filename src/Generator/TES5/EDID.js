let {
    addDef, string, conflict, subrecord, opts
} = require('../helpers');

module.exports = () => {
    addDef('EDID', 
        opts(subrecord('EDID', conflict('Override', string('Editor ID'))), {
            "keepCase": true
        })
    );
};