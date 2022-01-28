let {
    def, record
} = require('../helpers');

module.exports = () => {
    record('BSGN', 'Birthsign', {
        members: [
            def('EDID'),
            def('FULL'),
            def('ICON'),
            def('DESC'),
            def('SPLOs')
        ]
    })
};