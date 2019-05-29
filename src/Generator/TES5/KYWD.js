let {
    def, record
} = require('../helpers');

module.exports = () => {
    record('KYWD', 'Keyword', {
        members: [
            def('EDID'),
            def('CNAM')
        ]
    })
};