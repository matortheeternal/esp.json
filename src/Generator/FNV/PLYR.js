let {
    def, formId, subrecord, req, opts, 
    record
} = require('../helpers');

module.exports = () => {
    opts(record('PLYR', 'Player Reference', {
        members: [
            def('EDID'),
            opts(req(subrecord('PLYR', formId('Player'))), {
                "defaultNativeValue": 7
            })
        ]
    }), {
        "protected": 1
    })
};