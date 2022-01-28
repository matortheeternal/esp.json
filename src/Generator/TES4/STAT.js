let {
    def, record
} = require('../helpers');

module.exports = () => {
    record('STAT', 'Static', {
        members: [
            def('EDID'),
            def('MODL')
        ]
    })
};