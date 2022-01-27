let {
    req, def, string, conflictType, subrecord, 
    opts, record
} = require('../helpers');

module.exports = () => {
    record('AVIF', 'ActorValue Information', {
        members: [
            req(def('EDID')),
            def('FULL'),
            req(def('DESC')),
            def('ICON'),
            opts(subrecord('ANAM', conflictType('Translate', string('Short Name'))), {
                "transform": "keepcase"
            })
        ]
    })
};