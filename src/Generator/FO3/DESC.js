let {
    addDef, string, conflictType, subrecord, opts
} = require('../helpers');

module.exports = () => {
    addDef('DESC', 
        opts(subrecord('DESC', conflictType('Translate', string('Description'))), {
            "transform": "keepcase"
        })
    );
};