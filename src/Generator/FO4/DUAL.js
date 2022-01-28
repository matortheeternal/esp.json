let {
    def, record
} = require('../helpers');

module.exports = () => {
    record('DUAL', 'Dual Cast Data', {
        members: [
            def('EDID')
        ]
    })
};