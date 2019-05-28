let {
    def, req, subrecord, uint32, format, 
    record
} = require('../helpers');

module.exports = () => {
    record('CLFM', 'Color', {
        flags: {
            "2": "Non-Playable"
        },
        members: [
            def('EDID'),
            def('FULL'),
            req(def('CNAM')),
            subrecord('FNAM', format(uint32('Playable'), {
                "0": "False",
                "1": "True"
            }))
        ]
    })
};