let {
    addDef, string, conflictType, subrecord, opts
} = require('../helpers');

module.exports = () => {
    addDef('EDID', 
        opts(subrecord('EDID', conflictType('Override', string('Editor ID'))), {
            "keepCase": true
        })
    );
};