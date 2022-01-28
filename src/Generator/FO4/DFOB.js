let {
    def, formId, subrecord, record
} = require('../helpers');

module.exports = () => {
    record('DFOB', 'Default Object', {
        members: [
            def('EDID'),
            subrecord('DATA', formId('Object'))
        ]
    })
};