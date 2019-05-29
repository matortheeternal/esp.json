let {
    def, subrecord, formId, req, opts, 
    record
} = require('../helpers');

module.exports = () => {
    record('PLYR', 'Player Reference', {
        members: [
            def('EDID'),
            opts(req(subrecord('PLYR', formId('Player'))), {
                "defaultNativeValue": 7
            })
        ]
    })
};