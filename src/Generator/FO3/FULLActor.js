let {
    addDef, string, conflictType, subrecord, opts
} = require('../helpers');

module.exports = () => {
    addDef('FULLActor', 
        opts(subrecord('FULL', conflictType('Translate', string('Name'))), {
            "transform": "keepcase"
        })
    );
};