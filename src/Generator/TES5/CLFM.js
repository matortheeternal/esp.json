let {
    def, subrecord, uint32, record
} = require('../helpers');

module.exports = () => {
    record('CLFM', 'Color', {
        flags: {
            "2": "Non-Playable"
        },
        members: [
            def('EDID'),
            def('FULL'),
            def('CNAMReq'),
            subrecord('FNAM', uint32('Playable', {
                "0": "False",
                "1": "True"
            }))
        ]
    })
};