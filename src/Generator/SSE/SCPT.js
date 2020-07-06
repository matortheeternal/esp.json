let {
    def, record
} = require('../helpers');

module.exports = () => {
    record('SCPT', 'SCPT', {
        members: [
            def('EDID')
        ]
    })
};