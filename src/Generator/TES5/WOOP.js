let {
    def, subrecord, string, req, record
} = require('../helpers');

module.exports = () => {
    record('WOOP', 'Word of Power', {
        members: [
            def('EDID'),
            def('FULL'),
            req(subrecord('TNAM', string('Translation')))
        ]
    })
};