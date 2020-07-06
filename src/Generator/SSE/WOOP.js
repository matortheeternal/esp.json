let {
    def, subrecord, localized, string, req, 
    record
} = require('../helpers');

module.exports = () => {
    record('WOOP', 'Word of Power', {
        members: [
            def('EDID'),
            def('FULL'),
            req(subrecord('TNAM', localized(string('Translation'))))
        ]
    })
};