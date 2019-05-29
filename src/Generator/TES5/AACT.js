let {
    def, record
} = require('../helpers');

module.exports = () => {
    record('AACT', 'Action', {
        members: [
            def('EDID'),
            def('CNAM')
        ]
    })
};