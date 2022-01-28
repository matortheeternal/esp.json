let {
    def, record
} = require('../helpers');

module.exports = () => {
    record('LVSP', 'Leveled Spell', {
        members: [
            def('EDID')
        ]
    })
};