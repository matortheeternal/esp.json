let {
    def, formId, subrecord, req, opts, 
    record
} = require('../helpers');

module.exports = () => {
    opts(record('PLYR', 'Player Reference', {
        members: [
            def('EDID'),
            opts(req(subrecord('PLYR', formId('Player'))), {
                "defaultData": 7
            })
        ]
    }), {
        "defFlags": [
            "protected"
        ]
    })
};