let {
    def, record
} = require('../helpers');

module.exports = () => {
    record('LCRT', 'Location Reference Type', {
        members: [
            def('EDID'),
            def('CNAM')
        ]
    })
};